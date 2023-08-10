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
    <header className='flex justify-center pt-[50px] max-h-[50px] w-auto flex-wrap
    md:flex md:justify-between md:mx-[100px] md:pt-[50px]'>
    <div className='flex'>
    <Hamburg onClick={()=>setShow(!show)}/>
    {show && <Display />}
     
        <logo className="w-[100px] -translate-y-6 hover:animate-pulse">
        <img src="img/logo33.png" alt="logo" />
        </logo>
        <h1 className='text-white font-bold text-xl justify-start'>My Tinerary</h1>
      </div>
       <NavBar />
    </header>
      <Outlet />
    <Footer />
    </>
  )
}

