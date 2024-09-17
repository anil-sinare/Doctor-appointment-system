import React from 'react'
import { doctors } from '../assets/assets_frontend/assets'

const My_Appointments = () => {
    return (
        <div>
            <p className='pb-2 mt-12 font-medium text-zinc-600 border-b'>My Appointments </p>
            
            <div >
                {doctors.slice(0,2).map((item,index) =>(
                <div className=' flex  flex-col sm:flex-row justify-between border-b  mt-10     pb-5' key={index}>
                    <div className='flex flex-col sm:flex-row gap-6'  >
                          <img className='w-44  bg-blue-50 ' src={item.image} alt=''/>
                    
                    <div className='mb-5' >
                        <p className='font-semibold text-neutral-800 '> {item.name}</p>
                        <p className='text-sm text-gray-500'>{item.speciality}</p>
                        <p className='text-neutral-700 font-medium mt-1'>Address:</p>
                        <p className='text-xs text-gray-600 '>{item.address.line1}</p>
                        <p className='text-xs text-gray-600 '>{item.address.line2}</p>
                        <p className='text-xs mt-1'><span className='text-sm text-neutral-700 font-medium'>Date & Time:</span> 20,sep,2024</p>         
                                       </div>
                                       </div>
                    
                    <div> </div>
                    <div className='flex flex-col items-start gap-5 '>
                        <button className='  py-2 px-14 text-white rounded-lg text-sm  bg-blue-500 hover:scale-95 transition-all duration-300'  > Pay Online</button>
                        <button className='border-2 border-red-300 py-2 px-6 text-red-600 rounded-lg text-sm hover:scale-95 transition-all duration-300'> Cancel Appointment</button>
                         </div>
                     </div>    
                ))} 
            </div>
        </div>
    )
}

export default My_Appointments
