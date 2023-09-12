
import { useEffect, useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import Activity from "./Activity";
import Money from "./Money";

// eslint-disable-next-line react/prop-types

export default function Itinerary({ name, price, duration, tags, photo, admin_id, admin_photo, id }) {

  const [show,setShow] = useState(false);
  const money = Math.floor(price/40);
  const time = Math.floor(duration/60)
  const [red, setRed]= useState(false)
  
  const[activities,setActivities]= useState([])
  
  

  
  return (
    <>
    <div className="md:w-12/12 flex flex-col rounded-md items-center justify-center mt-6 px-4">
        <div className="w-11/12 md:w-12/12 h-[600px] flex flex-grow flex-col items-center justify-center bg-slate-100 mb-4 rounded-md">
            <p className=" flex items-center justify-center my-5 text-[20px] font-bold m-4">{name}</p>
            <img className="w-11/12 rounded-md h-[300px] mx-5 object-cover" src={photo} alt="photo" />
           
            <div className="flex flex-row md:flex-wrap w-11/12 sm:w-11/12 md:w-12/12 h-[120px] mt-6 px-4 items-center justify-between">
                <div className="flex flex-row md:flex-col items-center justify-start p-2 w-2/12 h-[120px]">
                    <img className="flex p-2 rounded-full" src={admin_photo} alt="User" />
                    <p className=" flex text-center text-sm">{admin_id}</p>
                </div>
                <div className="flex flex-col items-center justify-start p-2 w-12/12 h-[120px] ">
                    <p className=" flex items-center justify-start text-md font-bold">Hashtags:</p>
                    <p className=" flex flex-col items-center justify-start text-center text-sm">{tags}</p>
                </div>
                <div className="flex flex-col items-center justify-start p-2 w-[100px] h-[120px] ">
                    <p className=" flex items-center justify-start text-md font-bold">Duration:</p>
                    <p className=" flex items-center justify-start text-center text-sm">{time} hs</p>
                </div>
                <div className="flex flex-col items-center justify-start p-2 w-[200px] h-[120px] ">
                    <p className=" flex items-center justify-start text-md font-bold">Price:</p>
                    
                    <div> 
                      <Money price ={money}/>
                    </div>
                </div>
            </div>
              <div className="flex w-12/12 h-[40px] mt-3 px-4 items-center justify-between">
                {red ? <div onClick={() => setRed(!red)}><svg xmlns="http://www.w3.org/2000/svg" fill="orange" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 cursor-pointer"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg></div> : <div onClick={() => setRed(!red)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 cursor-pointer"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>
               </div>}
                <div>
                { show ? (<div onClick={() => setShow(!show)} className="hidden sm:flex"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" /></svg></div>) : (<div onClick={() => setShow(!show)} className="hidden sm:flex">View Activities<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg></div>)}
                </div> 
            </div>
        </div>
          
          {show && <Activity id={id} /> } 
        
      
        </div>     
      
    </>
  );
}






