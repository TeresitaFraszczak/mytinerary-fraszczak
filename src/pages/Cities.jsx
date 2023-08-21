import Galery from "../components/Galery"

export default function Cities() {
  return (
    <>

      <div className="h-[50vh] flex flex-col justify-center bg-current items-center" style={{backgroundColor: 'rgba(19, 18, 17, 0.88)'}}>
      <img className="rounded-lg w-[350px]" src="./img/backgroundLog.jpg" alt="" />
      <p className="text-white p-3"> Collection of the most beautiful places and experience</p>
      </div>

      <div className='h-[50vh] bg-slate-300'>
      <Galery />
      </div>

      </>
  )
}