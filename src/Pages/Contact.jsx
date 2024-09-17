import React from 'react'
import contact from "../assets/assets_frontend/contact_image.png"

const Contact = () => {
  return (
    <div>
       <div className=' text-center pt-10  font-lg text-2xl text-gray-500'>
        <p >CONTACT   &nbsp;<spna className="text-gray-700 font-medium" >US</spna> </p>
        </div>
      <div className='my-10 flex flex-col md:flex-row gap-12'>  

     
          <img className='w-full md:max-w-[360px]' src={contact }/>
           <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600 '>
          <b className='font-semibold text-xl'> OUR OFFICE</b>
          <p className='text-gray-500'>Ruby Hall Clinic in Sasoon Road is located Near Pune Railway Station<br/>Contact Us. Ruby Hall Clinic, 40, Sassoon Road, Pune - 411001 </p>
          <p className='text-gray-500' >Tel: 7249464685  <br/> anilsinare2003@gmail.com</p>
          <b className='font-semibold text-lg text-gray-600 '>CAREERS AT PRESCRIPTO </b>
          <p className='text-gray-500'>Learn more about our teams and job openings. </p>
         <span>  <button className='py-3 px-3 border-gray-900 border justify-start items-start text-sm hover:text-white hover:bg-gray-800'> Explore Jobs</button></span>
        </div>
    </div>
    </div>
  )
}

export default Contact

