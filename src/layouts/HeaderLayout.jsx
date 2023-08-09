import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import { Outlet } from "react-router-dom"
export default function HeaderLayout({children}) {
  return (
    <>
    
    <header className='flex justify-between mx-[100px] pt-[50px] max-h-[50px]'>
      <div className='flex'>
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

