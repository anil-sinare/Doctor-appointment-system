import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Login from './Pages/Login'
import MyProfile from './Pages/MyProfile'
import My_Appointments from './Pages/My_Appointments'
import Doctors from './Pages/Doctors'
import Appointment from './Pages/Appointment'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar />
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/doctors' element={<Doctors />}/>
      <Route path='/doctors/:speciality' element={<Doctors />}/>
      <Route path='/about' element={<About />} />
      <Route path='/login' element={<Login />} /> 
      <Route  path='/contact'  element={<Contact />}/>
      <Route path='/myprofile' element={<MyProfile />} />
      <Route path='/My_Appointments' element={<My_Appointments/>}/> 
     
      <Route path='/appointment/:docId' element={<Appointment />}  />


     </Routes>
     <Footer />
    </div>
  )
} 

export default App
