import { useParams } from "react-router-dom"

export default function CityDetails() {

  const { city_id } = useParams()

  return (
    <div className="h-[200px] w-[250px] m-2 bg-cover bg-center rounded-lg shadow-lg text-white" style={{backgroundImage:`url(${src})`}} >        
       <p className="text-[15px] font-bold">{text}</p>
    <div>CityDetails of city {city_id} under construction</div>
    </div>
  )
}