import React from 'react'
import group from "../assets/assets_frontend/group_profiles.png"
import arrow from "../assets/assets_frontend/arrow_icon.svg"
import header_img from "../assets/assets_frontend/header_img.png"
const Header = () => {
    return (
        <div className=' flex flex-col bg-primary md:flex-row flex-wrap  rounded-lg px-6 md:px-10 lg:px-20'>
            {/*left side*/}
            <div className='md:w-1/2 flex flex-col  items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb[-30vw]'>
                    <p className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight'> Book Appointment <br/>
                    With Trusted Doctors</p>

                    <div className='flex  flex-col md:flex-row items-center gap-3 text-white font-light'>
                        <img className='w-28' src={group} alt='group pic' />
                        <p>Simply browse through our extensive list of trusted doctors,<br className='hidden sm:block' />
                        schedule your appointment hassle-free.</p>
                    </div>
                    <a href='#speciality' className='flex items-center  px-8 py-3 border rounded-full bg-white gap-2 outline-none text-gray-600 text-sm m-auto hover:scale-105 transition-all duration-300 border-none' >  Book Appointment <img  className='w-3'  src={arrow} alt='arrow' /></a>
            </div>

            {/*Right side*/ }
            <div className='md:w-1/2 relative'>
                <img className=' w-full md:absolute bottom-0 h-auto rounded-lg '  src={header_img}   />
      

            </div>
        </div>
    )
}

export default Header
