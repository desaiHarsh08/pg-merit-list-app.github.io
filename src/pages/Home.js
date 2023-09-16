import React from 'react'
import { useNavigate } from 'react-router-dom';
const Home = () => {

    let navigate = useNavigate();

    const handleSubmit = (e)=> {
        e.preventDefault();
        navigate("/merit-list-info", {replace: true});
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
