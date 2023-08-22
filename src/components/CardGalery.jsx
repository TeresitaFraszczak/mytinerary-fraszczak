import { Link as Anchor } from "react-router-dom"

export default function CardGalery({src,alt,text,id}) {
  return (
    <div className="relative h-[200px] w-[330px] m-2 bg-cover bg-center rounded-lg text-white shadow-md shadow-white/5" style={{backgroundImage:`url(${src})`}} >        
       <p className="text-[15px] font-bold p-2">{text}</p>
       <button className='px-10 py-0 flex rounded bg-[#4F46E5] hover:bg-orange-600 shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out'> 
       <Anchor to="./citydetails" className="font-medium px-1 py-1"> View More</Anchor>
       </button>
       <div class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-white bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-40"></div>
    </div>
  )
}

