import { useState } from "react"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import { Outlet } from "react-router-dom"
import Hamburg from "../components/Hamburg"
import Display from "../components/Display";

export default function HeaderLayout() {
  let [show,setShow]=useState(false)
  return (
    <>    
    <header className='flex justify-between px-3 pt-[50px] w-auto flex-wrap
    md:flex md:justify-between md:pt-[50px] md:mx-6'>
    <div className='flex justify-between'>
    < Hamburg onClick={()=>setShow(!show)}/>
    {show && <Display />}
     
        <div className="w-[60px] m-3 -translate-y-6 hover:animate-pulse">
        <img src="./img/iconavion.png" alt="logo" />
        </div>
        <h1 className='text-white font-bold text-xl justify-start'>My Tinerary</h1>
      </div>
       <NavBar />
    </header>
    <Outlet />
    <Footer />
    </>
  )
}

