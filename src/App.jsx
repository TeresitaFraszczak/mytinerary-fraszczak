import { useState } from 'react'
import './App.css'

function App() {
  
  return (
    <>
      <header className='flex justify-between mx-12'>
      <h1 className='font-bold text-xl'>My Tinerary</h1>
        <nav className='flex sm:justify-end space-x-4'>
        
        <a href="./" className="font-bold font-medium px-3 py-2 text-center">Home</a>
        <a href="./" className="font-bold font-medium px-3 py-2 text-center">Cities</a>
        <button className='px-3 py-0 flex rounded bg-[#4F46E5]'>
          <a href="./" className="flex text-white font-bold font-medium px-0 py-2 m-1 items-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 mr-1">
          <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
          </svg> Login</a>
        </button>
        </nav>
      </header>
      <main className='flex mx-12 mt-[200px]'>
        <div className='mr-12 w-7/12'>
        <h2 className="font-bold text-3xl">Find the perfect destination</h2>
        <p className="py-8 text-justify text-[#1C1C1C99]">Our app will help you find perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has neves been easier.</p>
        <button className='px-10 py-0 flex rounded bg-[#4F46E5]'>   
      <a href="./" className="text-white font-medium px-3 py-2">View More</a>
      </button>
      </div>
      <div className="bg-black flex justify-end ml-12 w-5/12">
        <img className=" w-[308px] h-[200px]" src="" alt="carrousel" />
      </div>
      </main>
      <footer></footer>
    </>
  )
}

export default App
