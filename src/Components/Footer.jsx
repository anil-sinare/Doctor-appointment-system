import React from 'react'
import logo from '../assets/assets_frontend/logo.svg'

const Footer = () => {
    return (
        <div className='md:mx-10'>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'> 
           <div >
               <img className='mb-5 w-40' src={logo} alt='' />
               <p className='w-full md:w-2/3 text-gray-600 leading-6'>Doctors help in healing people when they are sick or have injured themselves. They diagnose the condition, and prescribe medicines and other treatment that need to be taken to get back to normal health. Specialist doctors are experts in treating diseases of a particular part of the body. Doctors work in clinics and hospitals.  </p>
              </div> 


           <div> 
            <p className='text-xl font-medium mb-5'>COMPANY </p>
           
                <ul className='flex flex-col gap-2 text-gray-600 '> 
                 <li> Home</li>
                 <li>Delivery</li>
                 <li>Privacy policy</li>
                 <li> About us</li>
                </ul>
            
           </div>
           <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH </p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li> +91 7249464685</li>
                <li>anilsinare2003@gmail.com</li>
            </ul>
             </div>
             </div>
        </div>
    )
}

export default Footer
