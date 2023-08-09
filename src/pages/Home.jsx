import { useState,useEffect } from "react";
import Carrousel from "../components/Carrousel";
import Buttoncarrous from "../components/Buttoncarrous";
import axios from "axios";

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
        
    <main className='flex mx-[100px] mt-[200px] mb-[200px]'>
      
    <div className='mr-12 w-5/12 h-[250px]'>   
       <h2 className="font-bold text-3xl">Find the perfect destination</h2>
       <p className="py-8 text-justify text-[#1C1C1C99]">Our app will help you find perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has neves been easier.</p>
       <button className='px-10 py-0 flex rounded bg-[#4F46E5] hover:bg-orange-600'>   
       <a href="./" className="text-white font-medium px-3 py-2">View More</a>
       </button>
    </div>  
   
    {show ? (<Buttoncarrous onClick={()=>setShow(!show)} value={"hiden"}/>) : (<Buttoncarrous onClick={()=>setShow(!show)} value={"view"}/>) }
    
    {show ? <Carrousel data={data} /> : (null)}
   
     
   </main> 
      
  );
}
