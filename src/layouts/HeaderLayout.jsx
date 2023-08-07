import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

export default function HeaderLayout({children}) {
  return (
    <>
    <img href="" alt="" />
    <header className='flex justify-between mx-12 mt-[50px] max-h-[50px]'>
      <div className='flex'>
        <logo className="w-[150px] hover:animate-pulse">
        <img src="img/logo33.png" alt="" />
        </logo>
        <h1 className='font-bold text-xl justify-start'>My Tinerary</h1>
      </div>
       <NavBar />
    </header>
      {children}
       <Footer />
    </>
  )
}

