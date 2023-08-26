import { Link as Anchor } from "react-router-dom"

export default function CardGalery({src,text,id}) {
  return (
    <div className="flex flex-col justify-between h-[200px] w-[330px] m-2 bg-cover bg-center rounded-lg text-white shadow-md shadow-white/5" style={{backgroundImage:`url(${src})`}} >        
       <p className="text-[15px] font-bold p-2">{text}</p>
       <button className='m-2 px-10 py-0 flex w-2/4 rounded bg-[#4F46E5] hover:bg-orange-600 shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out'> 
       <Anchor to={ '/city/'+id } className="font-medium px-0 py-1">View More</Anchor>
       </button>       
    </div>
  )
}

