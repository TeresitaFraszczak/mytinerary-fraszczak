import { useState } from "react";

export default function NavBar() {
  let [show,setShow]=useState(false)
  return (
    <nav className='flex sm:justify-end space-x-4'>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7" onClick={()=>setShow(!show)}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>

    {show ? ( 
      <>  
    <a href="./" className="font-bold font-medium px-3 py-2 text-center">Home</a>
    <a href="./" className="font-bold font-medium px-3 py-2 text-center">Cities</a>
    <button className='animate-bounce px-3 py-0 flex rounded bg-[#4F46E5] hover:bg-orange-600'>
      <a href="./" className="flex text-white font-bold font-medium px-0 py-2 m-1 items-center">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 mr-1">
      <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
      </svg> Login</a>
    </button>
    </>
    ) : (null)}

    </nav>
  );
}
