import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

export default function HeaderLayout({children}) {
  return (
    <>
    <header className='flex justify-between mx-12 bg-gradient-to-r from-cyan-500 to-blue-500'>
      <h1 className='font-bold text-xl'>My Tinerary</h1>
       <NavBar />
      </header>
      {children}
       <Footer />
    </>
  )
}

