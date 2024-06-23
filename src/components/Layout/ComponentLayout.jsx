import React, { useState } from 'react'
import Navbar from '../navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../footer/Footer'
import Login from '../login/Login'
const ComponentLayout = () => {
  const [loginn,setLoginn] = useState(false)
  return (
    <>
     <header>
     <Navbar setState={setLoginn} state={loginn} />    
     {
      loginn ? <Login setState={setLoginn} />:null
     }
     </header>
     <main>
      <Outlet/>
     </main>
     <footer>
      <Footer/> 
     </footer>
    </>
  )
}

export default ComponentLayout