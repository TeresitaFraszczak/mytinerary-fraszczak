import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import apiUrl from "../apiUrl";

export default function CityDetails() {
  const { city_id } = useParams()
  const [city, setCity] = useState([])

  useEffect(
    () => {
      axios(apiUrl + 'cities/' + city_id)
        .then(res =>{setCity(res.data.response)
           console.log(city_id)})
        .catch(err => console.log(err))
    }, []
  )

  return (
    <>
    
      <div className="mt-18 flex justify-center items-center text-white text-xl">
        <h1>City Detail {city.text}</h1>
      </div>
      <div className=" p-5">
        <img className="rounded-md" src={city.photo} alt={city.country} />
      </div>
      <div>
        <p className="font-bold mt-7 ml-4 text-white" >{city.featuredLocation} </p>
        <p className="font-semibold mt-8 ml-5 text-white">{city.description}</p>
        <p className="font-semibold mt-8 ml-5 text-white">{city.smalldescription}</p>
      </div>
      
      <div className="pt-[50px] ml-5 text-white">
        <p>Page under construction</p>
      </div>
      <div>

      </div>
    </>
  )
}