
import { useParams } from "react-router-dom";
import { useState ,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import city_actions from "../store/actions/cities";
import Itinerary from "../components/Itinerary";
import itinerary_actions from "../store/actions/itineraries";
import ItineraryNotFound from "../components/ItineraryNotFound";


const { read_city } = city_actions;
const { read_itineraries_from_city } = itinerary_actions

export default function CityDetails() {
  const [show, setShow] = useState(false)
  const { city_id } = useParams()
  const dispatch = useDispatch();
 
  //console.log(city_id)

  useEffect(
    () => {
      dispatch(read_city({ id: city_id }));
      dispatch(read_itineraries_from_city({ city_id }))
              
    }, []
  );

  const city = useSelector(store => store.cities.city)
    const itineraries = useSelector(store => store.itineraries.itineraries_from_city)
    console.log(itineraries)

  return (
    <>
    <div className="p-12" style={{backgroundColor: 'rgba(19, 18, 17, 0.88)'}}>
      
      <div className="p-12 rounded bg-cover bg-center" style={{ backgroundImage: `url(${city.photo})` }}>
         <div className="mt-18 flex flex-col justify-center items-center text-white">
            <h1 id="shadows" className="font-bold text-2xl">{city.city}</h1>        
         </div>
      <div className="flex flex-col justify-center items-center" >
           <p id="shadows" className="w-[80vh] text-lg font-medium text-white flex m-12 text-justify text-center text-shadow-2xl" >{city.smalldescription}</p>
      </div> 
      <div className="flex pt-[60px] items-end justify-center">
            <div onClick={() => setShow(!show)} className="rounded-md bg-[#4F46E5] hover:bg-orange-600 text-white text-[16px] text-center cursor-pointer w-[150px] h-13 p-1 mb-8">{show ? ('Close') : ('View Itineraries ↓')} </div>
             
      </div>
     </div>

     <div>
                {show && (itineraries.length !== 0 ? (
                    itineraries.map(each => (
                        <Itinerary
                            admin_id={each.city_id.admin_id.name}
                            admin_photo={each.city_id.admin_id.photo}
                            key={each._id}
                            name={each.name}
                            price={each.price}
                            duration={each.duration}
                            tags={each.tags}
                            photo={each.photo}
                        />
                    ))
                ) : (
                 <ItineraryNotFound />
                ))}
            </div>



           
       </div>  
      
      
    </>
  )
}