import React, { useState } from 'react'
import logo from '../assets/assets_frontend/logo.svg'
import { NavLink, useNavigate} from 'react-router-dom'
import profile  from '../assets/assets_frontend/anil sinare pic.jpg'
import dropdown from '../assets/assets_frontend/dropdown_icon.svg'
import menu from '../assets/assets_frontend/menu_icon.svg'
import cross from '../assets/assets_frontend/cross_icon.png'
const Navbar = () => {

    const navigate = useNavigate();

    const [showMenu , setShowMenu]= useState(false);
    const[token ,setToken]= useState(true);
    
    return (
        <div className='flex items-center justify-between text-sm py-4 mb-5  border-b border-b-gray-400'>
            <img onClick={()=>{navigate('./')}} className='w-44 cursor-pointer'  src={logo}/>
           <ul className='hidden md:flex items-start gap-5 font-medium'>
            <NavLink to= '/'>
                    <li className='py-1'>HOME</li>
                    <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
            </NavLink>
            <NavLink to='/doctors'>
                    <li className='py-1'>ALL DOCTORS</li>
                    <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
            </NavLink>
            <NavLink to='/about'>
                    <li className='py-1'>ABOUT</li>
                    <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
            </NavLink>
            <NavLink to='contact'>
                    <li className='py-1'>CONTACT</li>
                    <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
            </NavLink>
           </ul>

           <div className='flex items-center gap-4'>
            {
                token
                ?<div className='flex items-center cursor-pointer gap-2 group relative'>
                     <img className='w-9 rounded-full'  src={profile} alt="profile"/>
                     <img className='w-2.5' src={dropdown}  alt="dropdown"/>

                     <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20  hidden group-hover:block'> 
                        <div className='min-w-48  rounded flex flex-col gap-4 p-4 bg-stone-100 justify-center'>
                           <p onClick={()=>navigate('/MyProfile')} className='hover:text-black cursor-pointer'>My Profile</p>
                           <p onClick={()=>navigate('/My_Appointments')} className='hover:text-black cursor-pointer'>My Appointments</p>
                           <p onClick={()=>setToken(false)} className='hover:text-black cursor-pointer'>Logout</p>

                            </div>
                        
                        </div>
                     </div>
                : <button onClick={()=>navigate('/login')} className='bg-blue-500 text-white px-8 py-3 rounded-full hidden md:block'> Create Account</button>
            }

            <img onClick={()=>setShowMenu(true)} className='w-6 md:hidden' src={menu}  alt="menu"/>
            
            {/*mobile menu*/ }
            <div className={`${showMenu ? 'fixed w-full':'h-0 w-0'} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}> 
                <div className='flex justify-between items-center px-5 py-6'>   
                    <img className='w-36' src={logo} />
                    <img className='w-6'  onClick={()=>setShowMenu(false)} src={cross}/>
                </div>
                <ul className='flex flex-col items-center gap-2 mt-5  mx-5 text-lg   font-medium'>
                    <NavLink  onClick={()=>setShowMenu(false)}  to={'/'}> <p className='px-4 py-2 rounded inline-block'>HOME</p></NavLink>
                    <NavLink onClick={()=>setShowMenu(false)}  to={'/doctors'}><p className='px-4 py-2 rounded inline-block'>ALL DOCTORS</p></NavLink>
                    <NavLink onClick={()=>setShowMenu(false)}  to={'/about'}><p className='px-4 py-2 rounded inline-block'>ABOUT</p></NavLink>
                    <NavLink onClick={()=>setShowMenu(false)}  to={'/contact'}><p className='px-4 py-2 rounded inline-block'>CONTACT   </p></NavLink>
                </ul>
            </div>
           </div>
        </div>
    )
}

export default Navbar
