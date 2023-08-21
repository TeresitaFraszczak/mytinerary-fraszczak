import { useState,useEffect } from "react";
import Carrousel from "../components/Carrousel";
import axios from "axios";
import { Link as Anchor } from "react-router-dom";
import Slogan from "../components/Slogan";

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
    
    <Slogan />
        
    <main className='rounded-lg flex flex-col m-3 gap-7 justify-between
    sm:my-7 sm:mx-10 sm:items-center sm:flex-col  
    md:my-10 md:mx-10 
    lg:mx-7 lg:mt-10 lg:flex-row'
    style={{backgroundColor: 'rgba(190, 101, 18, 0.74)'}}>

    <div className='flex flex-col w-10/12 items-center px-5 py-8 mt-6 text-white
    sm:w-9/12 sm:items-center
    md:w-9/12 md:items-center
    lg:ps-10 lg:w-4/12 lg:items-center'>         
       <h2 className="font-bold text-3xl">Find the perfect destination</h2>
       <p className="py-10 text-justify">Our app will help you find perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has neves been easier.</p>
       
       <button className='px-10 py-0 flex rounded bg-[#4F46E5] hover:bg-orange-600'>   
       <Anchor to="./cities" href="./" className="text-white font-medium px-3 py-2">View More</Anchor>
       </button>
    </div>  
       
    <Carrousel data={data} /> 
         
   </main>
   </>   
  );
}
