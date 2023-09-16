import React from 'react'
import { Link } from 'react-router-dom'

const ErrorNoteForMeritList = () => {
    return (
        <div className='bg-white text-black p-4 w-[90%] h-[67vh] overflow-y-scroll  sm:w-[70%] lg:w-1/2 flex flex-col gap-5 justify-between'>
            <div id='section-1'>
                <h1 className='my-3 text-xl lg:text-2xl font-semibold  uppercase border-b-2 pb-2 text-slate-600 '>Important notes:</h1>
                <ul className='flex flex-col gap-3'>
                    <li className='text-red-500 flex gap-2 items-center'>
                        <span className="material-symbols-outlined">
                            east
                        </span>
                        <span>
                            Your application has not made it to the first Merit list which was published on <span className='text-blue-700 font-medium'>16th September 2023</span>.
                        </span>
                    </li>
                    <li className='text-red-500 flex gap-2 items-center'>
                        <span className="material-symbols-outlined">
                            east
                        </span>
                        <span>
                            We suggest you wait for the second merit list, which could be published around <span className='text-blue-700 font-medium'>20th September 2023</span> subject to
                            the availability of seats and fulfilment of cut-off.
                        </span>
                    </li>
                    <li className='text-red-500 flex gap-2 items-center'>
                        <span className="material-symbols-outlined">
                            east
                        </span>
                        <span>
                            We request you not to make any enquiry with the College regarding this issue. If your application is
                            shortlisted, you shall receive an email as well as SMS for the same in your registered Email ID and
                            contact number, from the College.
                        </span>
                    </li>

                </ul>
            </div>
            <div id="section-2" className='flex justify-center items-center'>
                <button className='px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-md my-7 mx-2'>
                    <Link to={"/"}>Close</Link>    
                </button>
            </div>
        </div>
    )
}

export default ErrorNoteForMeritList
