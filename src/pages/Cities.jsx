import { useState,useEffect,useRef } from 'react';

import CardGalery from "../components/CardGalery";
import CardErr from '../components/CardErr';
import { useSelector, useDispatch } from 'react-redux';
import city_actions from '../store/actions/cities';

const { read_cities } = city_actions;

export default function Cities() {
  const cities = useSelector(store => store.cities.cities);
  const [reEffect,setReEffect] = useState(true);
  const text = useRef();
  const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(read_cities({ text: text.current?.value }));
      },[reEffect]);
  
    function handlerFilter(){
        console.log(text.current.value)
        setReEffect(!reEffect);
    }
    return (
      <>
        <div className="text-white h-[20vh] flex justify-center bg-current items-center" style={{backgroundColor: 'rgba(19, 18, 17, 0.88)'}}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
         <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
         </svg>
         <p className="p-5 italic text-center text-xl p-3 animate-[pulse_6s_ease-in-out_infinite]">Collection of the most beautiful places and experience</p>
        </div>

        <div className="m-12 w-12/12 flex justify-center">  
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 25 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-4 my-2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
        
        <input className='w-4/12 items-center rounded-lg border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-secondary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none' placeholder="Search your city" ref={text} type='text' name='text' id='text' onKeyUp={handlerFilter}/>
        </div>
     
        <div className='grid gap-2 grid-cols-1 flex justify-items-center
        md:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-4'>        
        {cities.length != 0 ?
        cities.map(each=><CardGalery key={each._id} src={each.photo} alt={each._id} text={each.city} id={each._id} />) :<CardErr/>}
        </div> 
        
      </> 
  
    )
  }
  
    