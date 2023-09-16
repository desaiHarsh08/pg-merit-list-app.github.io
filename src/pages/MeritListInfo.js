import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import * as XLSX from "xlsx"


const MeritListInfo = () => {

  let navigate = useNavigate();


  const [mydata, setMyData] = useState({
    A: 0,
    C: [],
    D: '',
    F: ''
  });

  const [excelData, setExcelData] = useState([]);

  useEffect(() => {
    const contact = parseFloat(localStorage.getItem('contact'));
    if(contact === null) {
        localStorage.clear();
        navigate("/", { replace: true });
   }

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


        const courseNamesArray = [];
        for (let index = 1; index < jsonData.length; index++) {
          if (jsonData[index].E === contact) {


            courseNamesArray.push(jsonData[index].C);

            setMyData({
              A: jsonData[index].A,
              C: courseNamesArray,
              D: jsonData[index].D,
              F: jsonData[index].F,
            })
          }

        }

      });
  }, [mydata]);


  const handleClose = (e) => {
    localStorage.clear()
    navigate("/", { replace: true });
  }


  return (
    <>

      {/* Close Button */}
      <div id="close" className='absolute top-0 right-0'>
        <button onClick={handleClose} className='px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-md my-7 mx-2'>Close</button>
      </div>

      <div className='bg-white text-black p-4 w-[90%] h-[67vh] overflow-y-scroll  sm:w-[70%] lg:w-1/2'>
        <div id='section-1'>
          <h1 className='my-3 text-xl lg:text-2xl font-semibold  uppercase border-b-2 pb-2 text-slate-600 '>Important Notes:</h1>
          <div className='px-4'>
            <ol type='1' className='list-decimal flex flex-col gap-2'>
              <li>
                Only the applications that have been Merit listed will be shown in this screen.
              </li>
              <li>
                Applicants who have completed their application process by 15th September, 2023 have been considered for this Merit list.
              </li>
              <li>
                Last date of payment of fees for Merit list I is 19th September, 2023.
              </li>
              <li>
                <span className='text-red-500 font-medium'>
                  Please note that you must pay your admission fees within the last date of admission i.e., 19th September, 2023 and the other steps (as given in the process after Merit list) i.e., Step No. 2 “Add on Information” & Step No 3 “Document Upload” needs to be completed within 24 Hours from the date of update of your Admission fees payment.
                </span>
              </li>
              <li>
                Any payment made after 19th September, 2023 shall not be considered valid for admission.
              </li>
            </ol>

          </div>
        </div>
        <div id="section-2" className='p-4  flex justify-center w-full '>
          <div id="table" className='border-l border-t border-r w-full '>
            <div id="row-1" className='flex border-b w-full '>
              <div id="name" className='border-r  text-center w-1/4 py-2'>Name</div>
              <div className='invisible w-1/4 py-2'>Dummy column</div>
              <div className='invisible w-1/4 py-2'>Dummy column</div>
              <div className='invisible w-1/4 py-2'>Dummy column</div>
            </div>
            <div id="row-2" className='flex border-b w-full'>
              <div id="row-2-col-1" className='w-1/2 border-b'>
                <div className='border-r border-b border-l  flex justify-center items-center text-center py-2'>App No.</div>
                <div className='border-r  flex justify-center items-center py-2 '>
                  {mydata !== null ? mydata.A : ''}
                </div>
              </div>
              <div className='w-1/2 border-b'>
                <div className='border-r border-b   flex justify-center items-center text-center py-2'>Course</div>
                <div className='border-r  flex justify-center items-center py-2'>
                  {/* {mydata.C !=='' ? mydata.C : ''} */}
                  {mydata.C !=='' ? (
                    <ul className='flex justify-center items-center flex-col'>
                      {mydata.C.map((course, index) => (
                        <li key={index}>{course}</li>
                      ))}
                    </ul>
                  ) : ''}
                </div>
              </div>

              {/* <div id='col-1' className='flex w-1/2'> */}

              {/* <div className='invisible border-r w-[20%] py-2'>Dummy column</div> */}
              {/* <div className='border-r border-l w-[80%] flex justify-center items-center text-center py-2'>App No.</div>
              </div>
              <div id='col-2' className='flex w-1/2'>
                <div className='border-r w-full flex justify-center items-center py-2'>Course</div>
              </div> */}

              {/* <div id='col-3' className='flex w-1/4'>
                <div className='border-r w-full flex justify-center items-center py-2'>Session</div>
              </div>
              <div id='col-4' className='flex w-1/4'>
                <div className='w-full flex justify-center items-center py-2 text-center'>Merit list status</div>
              </div> */}

            </div>
            <div id="row-3" className='flex border-b w-full'>

              <div id="row-2-col-2" className='w-1/2 border-b'>
                <div className='border-r border-b   flex justify-center items-center text-center py-2'>Session</div>
                <div className='border-r  flex justify-center items-center py-2'>
                  {mydata.D!=='' && mydata.D}</div>
              </div>
              <div id="row-2-col-2" className='w-1/2 border-b'>
                <div className='border-r border-b   flex justify-center items-center text-center py-2'>Merit list status</div>
                <div className='border-r  flex justify-center items-center py-2'>{mydata.F!=='' && mydata.F}</div>
              </div>
            </div>






            {/* <div id="row-3" className=' overflow-x-auto w-[686px] '>
              <div className='w-full flex border-b'>
                <div id='row-3-col-1' className='flex w-1/4 '>
                  <div className='border-r w-[20%] py-2 text-center'>1.</div>
                  <div className='border-r w-[80%] flex justify-center items-center py-2'>001</div>
                </div>
                <div id='row-3-col-2' className='flex w-1/4'>
                  <div className='border-r w-full flex justify-center items-center py-2'>MCOM</div>
                </div> */}
            {/* <div id='row-3-col-3' className='flex w-1/4'>
                  <div className='border-r w-full flex justify-center items-center py-2'>2023</div>
                </div>
                <div id='row-3-col-4' className='flex w-1/4'>
                  <div className='w-full flex justify-center items-center py-2'>-</div>
                </div> */}
            {/* </div>
            </div> */}
          </div>
        </div>

        <div id="section-3">
          <h1 className='my-3 text-xl lg:text-2xl font-semibold  uppercase border-b-2 pb-2 text-slate-600 '>Important Links:</h1>
        </div>
        <div className='flex flex-col gap-4  '>
          <a href="https://74.207.233.48/AdmissionPG2023/#/" target={'_blank'} rel="noreferrer" className='block text-center'>
            <span className='text-blue-500 font-medium underline'>
              Click here to access your Online Applicant Login for completing the process including payment of Admission fees.
            </span>
          </a>
          <a href="https://thebges.edu.in/wp-content/uploads/2023/09/PG-PROCESS-AFTER-ML-23-24-Final.pdf" target={'_blank'} rel="noreferrer" className='block text-center'>
            <span className='text-blue-500 font-medium underline'>
              Click here to access detailed information about the process to be followed on being merit listed.
            </span>
          </a>
        </div>

      </div>
    </>
  )
}

export default MeritListInfo
