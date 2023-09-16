import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import * as XLSX from "xlsx"


const Home = () => {

    let navigate = useNavigate();

  // const excelFilePath = "../assets/PG ML LIST 1 160923.xlsx";

  // eslint-disable-next-line
  const [mydata, setMyData] = useState({
    A: 0,
    C: [],
    D: '',
    F: ''
  });

  

  useEffect(() => {
    
  }, [mydata, navigate]);

  const handleDisplay = (contact)=> {
    /* if(contact === null) {
        localStorage.clear();
        navigate("/", { replace: true });
   }*/

    const excelFileUrl = process.env.REACT_APP_EXCEL_FILE; 

    fetch(excelFileUrl)
      .then((response) => response.arrayBuffer())
      .then((data) => {
        const workbook = XLSX.read(data, { type: 'array' });

        // Assuming you want the first sheet
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];

        // Convert sheet data to JSON
        const jsonData = XLSX.utils.sheet_to_json(sheet);

        for (let index = 1; index < jsonData.length; index++) {
          if (parseFloat(jsonData[index].E) === parseFloat(contact)) {
            localStorage.setItem('contact', jsonData[index].E)
            // console.log('Navigating to /merit-list-info');
            navigate("/merit-list-info", {replace: true})
            return; // Exit the loop after navigation
          }

        }
        alert('Please enter the valid mobile number');

      });
  }

    const handleSubmit = (e)=> {
        e.preventDefault();
        const phone = parseFloat(document.getElementById('phone_number').value);
        // navigate("/merit-list-info", {replace: true});
        if(isNaN(phone)) {
            alert('Please enter the valid mobile number');
            return;
        }
        handleDisplay(document.getElementById('phone_number').value)
    }
    return (
        <div className='bg-white text-black p-5 w-[90%] sm:w-1/2 lg:w-[40%] '>
            <h1 className='my-3 text-xl lg:text-2xl font-semibold flex gap-3 items-center uppercase border-b-2 pb-2 text-slate-600 '>
                {/* <FaBlenderPhone className='text-2xl' /> */}
                <span className="material-symbols-outlined text-2xl">
                    phone_iphone
                </span>
                <span>
                    Enter your 10 digit Mobile Number used in Applicant's Login
                </span>
            </h1>
            <form className='w-full flex gap-2 my-5 mt-10' onSubmit={handleSubmit}>
                <div className="phone__number w-full">
                    <input type="text" name="phone_number" id="phone_number" className='px-4 py-2 border-2 w-full rounded-md ' placeholder='Enter your 10 digit Mobile Number' />
                </div>
                <div className="btn">
                    <button className='px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-md text-white font-semibold  '>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Home
