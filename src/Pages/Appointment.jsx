import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { doctors } from "../assets/assets_frontend/assets"; 
import verify_icon from "../assets/assets_frontend/verified_icon.svg"
import info_icon from "../assets/assets_frontend/info_icon.svg"
import RelatedDoctors from '../Components/RelatedDoctors';

const Appointment = () => {

    const {docId} = useParams()
   const daysOfWeek= ['SUN','MON','TUE','WED','THU','FRI','SAT']

    const[docInfo, setDocInfo] = useState(null)
    const[docSlots , setDocSlots] = useState([])
    const[slotIndex,setSlotIndex] = useState(0)
    const[slotTime, setSlotTime] = useState('')

  
    const fetchDocInfo = async ()=>{
        const docInfo = doctors.find(doc => doc._id === docId)
        setDocInfo(docInfo);
        
    }   

    const getAvailableSlots = async () =>{
        setDocSlots([])

        //gating current date
        let today = new Date()
        for (let i=0; i < 7; i++) {
            //gating date with index
            let currentDate = new Date(today)
            currentDate.setDate(today.getDate()+i)

            //setting end time of the date with index
            let endTime = new Date()
            endTime.setDate(today.getDate()+i)
            endTime.setHours(21,0,0,0)

            // setting Hours
            if(today.getDate() === currentDate.getDate()){
                currentDate.setHours(currentDate.getHours()>10 ? currentDate.getHours()+1 :10)
                currentDate.setMinutes(currentDate.getMinutes()>30 ? 30: 0)

            }
            else
            {
                currentDate.setHours(10)
                currentDate.setMinutes(0)
            }
            let timeSlots =[]
            while(currentDate < endTime){
                let formattedTime = currentDate.toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'})
           
           
           timeSlots.push({
            datetime:   new Date(currentDate),
            time:formattedTime
           })

            currentDate.setMinutes(currentDate.getMinutes()+30)
         }
         setDocSlots(prev=>([...prev,timeSlots]))
        
        }     


    }
        

    useEffect (()=>{
        fetchDocInfo()

    },[doctors,docId])

    useEffect(()=>{
        getAvailableSlots()
    },[docInfo])

    useEffect(()=>{
        console.log(docSlots)
    },[docSlots])


    return docInfo && (
        <div >
            {/*doctor detail*/ }
            <div className='flex flex-col sm:flex-row gap-4'> 
                <div>
                <img className=' bg-primary rounded-lg w-full sm:max-w-72' src={docInfo.image} />
             </div>
             <div className= 'flex-1 border border-gray-400  p-8 py-7 bg-white mx-2 rounded-lg sm:mx-0 mt-[-80px] sm:mt-0'>
                        {/*doctor name /degree/experience*/}
                    
                        <p className='flex  gap-2 text-2xl sm:text-3xl  text-gray-800 font-medium items-center'>
                            {docInfo.name} 
                            <img className='w-5' src={verify_icon} /> 
                        </p>
                      
                      <div className='flex items-center text-sm gap-2 text-gray-600 mb-3 mt-1'>
                        <p>{docInfo.degree}- {docInfo.speciality}</p>
                        <button className='border border-gray-300 px-2 py-0.5 text-xs rounded-full '>{docInfo.experience}</button>
                      </div>

                      {/*Doctor About*/ }
                      <div className=''>
                        <p className='flex gap-1 font-medium text-gray-800 text-sm'>About <img className='w-3' src={info_icon} /></p>
                        <p className='mt-1 text-sm text-gray-500 max-w-[700px]'>{docInfo.about}</p>
                      </div>
                    <p className='mt-2 text-gray-500 font-medium'>Appointment fee: ₹ {docInfo.fees} </p>
                   

                </div>
            
            </div>

            {/*booking slot*/ }
            <div className='sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700'>
                <p>Booking Slots</p>
                <div className='flex gap-5 items-center w-full overflow-x-scroll    mt-4 '>
                    {
                        docSlots.length && docSlots.map((item,index)=>(
                            <div onClick={()=> setSlotIndex(index)} key={index} className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex === index ? 'bg-blue-500 text-white' : 'border border-gray-200 '}`}>
                                <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                                <p>{item[0] && item[0].datetime.getDate()}</p>
                                 </div>
                        ))
                    }
                </div>

               <div className='flex items-center gap-3 mt-5 overflow-x-scroll w-full '>
                {docSlots.length && docSlots[slotIndex].map((item,index) =>(

                    <p onClick={()=>setSlotTime(item.time)} className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time === slotTime ? 'bg-blue-500 text-white':'text-gray-400 border border-gray-300'}`} key={index}>
                        {item.time.toLowerCase()}
                    </p>
                ))}
               </div>     
               <button  className='px-12 py-3 bg-blue-500 text-white cursor-pointer rounded-full text-sm font-light my-6  '> Book an appointment</button>  
            </div>
          <RelatedDoctors docId={docId}  speciality={docInfo.speciality}/>
            
        </div>
    )
    }

export default Appointment

//
