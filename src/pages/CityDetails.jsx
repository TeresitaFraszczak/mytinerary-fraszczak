import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import apiUrl from "../apiUrl";

export default function CityDetails() {
  const { city_id } = useParams()
  const [city, setCity] = useState([])
  console.log(city_id)
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
        <h1>{city.text}</h1>
      </div>
      <div className=" p-5">
        <img className="rounded-md" src={city.photo} alt={city.country} />
      </div>
            
      <div className="pt-[50px] ml-5 text-white font-bold justify-center">
        <p>Page under construction</p>
      </div>
      <div>

      </div>
    </>
  )
}