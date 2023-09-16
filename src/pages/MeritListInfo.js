import React from 'react'
import { useNavigate } from 'react-router-dom';

const MeritListInfo = () => {

  let navigate = useNavigate();

  const handleClose = (e) => {
    console.log('fired');
    navigate("/", { replace: true });
  }


  return (
    <>

      {/* Close Button */}
      <div id="close" className='absolute top-0 right-0'>
        <button onClick={handleClose} className='px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-md my-7 mx-2'>Close</button>
      </div>

      <div className='bg-white text-black p-4 w-[90%] h-[70vh] overflow-y-scroll  sm:w-[70%] lg:w-1/2'>
        <div id='section-1'>
          <h1 className='my-3 text-xl lg:text-2xl font-semibold  uppercase border-b-2 pb-2 text-slate-600 '>Important Notes:</h1>
          <div className='px-4'>
            <ol type='1' className='list-decimal flex flex-col gap-2'>
              <li>
                Only the applications that have been Merit listed will be shown in this screen.
              </li>
              <li>
                Applicants who have completed their application process by <span className='bg-yellow-300'>INPUT BOX</span> have been

                considered for this Merit list.
              </li>
              <li>
                Last date of payment of fees for Merit list I is <span className='bg-yellow-300'>INPUT BOX</span>.
              </li>
              <li>
                <span className='text-red-500 font-medium'>
                  Please note that you must pay your admission fees within the last date of admission i.e., <span className='bg-yellow-300'>INPUT BOX</span> and the other steps (as given in the process after Merit list) I.e., Step No. 2 "Add on information" & Step No 3 "Document Upload" needs to be completed within 24 Hours from the date of update of your Admission fees payment.
                </span>
              </li>
              <li>
                Any payment made after <span className='bg-yellow-300'>input box</span> July, 2023 shall not be considered valid for

                admission.
              </li>
            </ol>

          </div>
        </div>
        <div id="section-2" className='p-4  flex justify-center '>
          <div id="table" className='border-l border-t border-r  overflow-x-auto w-[686px] '>
            <div id="row-1" className='flex border-b  overflow-x-auto w-[686px]'>
              <div id="name" className='border-r  text-center w-1/4 py-2'>Name</div>
              <div className='invisible w-1/4 py-2'>Dummy column</div>
              <div className='invisible w-1/4 py-2'>Dummy column</div>
              <div className='invisible w-1/4 py-2'>Dummy column</div>
            </div>
            <div id="row-2" className='flex border-b  overflow-x-auto w-[686px]'>
              <div id='col-1' className='flex w-1/4'>
                <div className='invisible border-r w-[20%] py-2'>Dummy column</div>
                <div className='border-r border-l w-[80%] flex justify-center items-center text-center py-2'>App No.</div>
              </div>
              <div id='col-2' className='flex w-1/4'>
                <div className='border-r w-full flex justify-center items-center py-2'>Course</div>
              </div>
              <div id='col-3' className='flex w-1/4'>
                <div className='border-r w-full flex justify-center items-center py-2'>Session</div>
              </div>
              <div id='col-4' className='flex w-1/4'>
                <div className='w-full flex justify-center items-center py-2 text-center'>Merit list status</div>
              </div>

            </div>
            <div id="row-3" className=' overflow-x-auto w-[686px] '>
              <div className='w-full flex border-b'>
                <div id='row-3-col-1' className='flex w-1/4 '>
                  <div className='border-r w-[20%] py-2 text-center'>1.</div>
                  <div className='border-r w-[80%] flex justify-center items-center py-2'>001</div>
                </div>
                <div id='row-3-col-2' className='flex w-1/4'>
                  <div className='border-r w-full flex justify-center items-center py-2'>MCOM</div>
                </div>
                <div id='row-3-col-3' className='flex w-1/4'>
                  <div className='border-r w-full flex justify-center items-center py-2'>2023</div>
                </div>
                <div id='row-3-col-4' className='flex w-1/4'>
                  <div className='w-full flex justify-center items-center py-2'>-</div>
                </div>
              </div>
              <div className='w-full flex border-b'>
                <div id='row-3-col-1' className='flex w-1/4 '>
                  <div className='border-r w-[20%] py-2 text-center'>2.</div>
                  <div className='border-r w-[80%] flex justify-center items-center py-2'>001</div>
                </div>
                <div id='row-3-col-2' className='flex w-1/4'>
                  <div className='border-r w-full flex justify-center items-center py-2'>MCOM</div>
                </div>
                <div id='row-3-col-3' className='flex w-1/4'>
                  <div className='border-r w-full flex justify-center items-center py-2'>2023</div>
                </div>
                <div id='row-3-col-4' className='flex w-1/4'>
                  <div className='w-full flex justify-center items-center py-2'>-</div>
                </div>
              </div>
            </div>
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
