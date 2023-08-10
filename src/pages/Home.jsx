import { useState,useEffect } from "react";
import Carrousel from "../components/Carrousel";
import axios from "axios";
import { Link as Anchor } from "react-router-dom";

export default function Home() {
  let [show,setShow] = useState(true)
  let [data,setData] = useState([])
  
    /*let data = [
        {id: 'america1', city: "Cancun", photo: "/img/america/cancun.jpg"},
        {id: 'america2', city: "New York", photo: "/img/america/newyork.jpg"},
        {id: 'america3', city: "Rio de Janeiro", photo: "/img/america/rioDeJaneiro.jpg"},
        {id: 'america4', city: "Ushuaia", photo: "/img/america/ushuaia.jpg"},
        {id: 'asia1' , city: "Bangkok", photo: "/img/asia/bangkok.jpg"},
        {id: 'asia2' , city: "Pekin", photo: "/img/asia/pekin.jpg"},
        {id: 'asia3' , city: "Singapur", photo: "/img/asia/singapur.jpg"},
        {id: 'asia4' , city: "Tokyo", photo: "/img/asia/tokio.jpg"},
        {id: 'europe1' , city: "Ibiza", photo: "/img/europe/ibiza.jpg"},
        {id: 'europe2' , city: "London", photo: "/img/europe/london.jpg"},
        {id: 'europe3' , city: "Paris", photo: "/img/europe/paris.jpg"},
        {id: 'europe4' , city: "Roma", photo: "/img/europe/roma.jpg"},
        {id: 'oceania1' , city: "Majuro", photo: "/img/oceania/majuro.jpg"},
        {id: 'oceania2' , city: "Sidney", photo: "/img/oceania/sidney.jpg"},
        {id: 'oceania3' , city: "Suva", photo: "/img/oceania/suva.jpg"},
        {id: 'oceania4' , city: "Wellington", photo: "/img/oceania/wellington.jpg"}
    ]*/
    useEffect(
      ()=>{
        axios('/data.json')
          .then(res=>setData(res.data))
          .catch(err=>console.log(err))
      }, 
    []   
    )

  return (
    <>
    
    <div className="flex justify-center h-[100px] items-center">
      <p className="italic mt-[150px] text-center text-lg animate-[pulse_6s_ease-in-out_infinite]
      sm:mt-[100px] mx-3
      md:mt-100px md:text-xl 
      lg:mt-10 lg:text-xl 
      ">"Find your perfect trip, designed by insiders who know and love their cities"</p>
    </div>
        
    <main className='grow flex mx-2 mt-[100px] mb-[200px] flex-col
    sm:mx-[80px] sm:mt-[60px] sm:mb-[50px] sm:flex-wrap
    md:mx-[80px] md:mt-[50px] md:mb-[50px] md:flex-wrap
    lg:mx-[80px] lg:mt-[40px] lg:mb-[50px]'>
    <div className='rounded-lg flex ps-2 py-10 mt-8 flex-wrap 
    sm:ps-10 sm:py-10 sm:mb-1
    md:ps-10 md:py-10 md:mb-1
    lg:ps-10 lg:py-10 lg:mb-1 lg:flex-row'
    style={{backgroundColor: 'rgba(190, 101, 18, 0.74)'}} >   
    <div className='mr-12 w-12/12 h-[300px] text-white
    sm:h-[250px]
    md:w-12/12 md:h-[200px]
    lg:w-4/12 lg:h-[250px]'>   
       <h2 className="font-bold text-3xl">Find the perfect destination</h2>
       <p className="py-10 text-justify">Our app will help you find perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has neves been easier.</p>
       <button className='px-10 py-0 flex rounded bg-[#4F46E5] hover:bg-orange-600'>   
       <Anchor to="./cities" href="./" className="text-white font-medium px-3 py-2">View More</Anchor>
       </button>
    </div>  
   
    
    <Carrousel data={data} /> 
   
    </div>  
   </main>
   </>   
  );
}
