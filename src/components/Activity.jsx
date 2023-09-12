

import activity_actions from "../store/actions/activities"
import { useEffect, useState } from "react"

import axios from "axios"
import apiUrl from '../apiUrl'



export default function Activity({ id }) {

 
 
  const [activities, setActivities] = useState()
  // let name = useSelector((store =>store.activities?.activities_from_itinerary));
  // console.log(name)
  const fillActivities = () => {
    console.log(id)
    axios(apiUrl + 'activities?itinerary_id=' + id)
      .then(res => setActivities(res.data.response))
      .catch(err => {
        setActivities([])
        console.log(err)
      })
  }
  useEffect(
    () => {

      fillActivities()
    }, []
  )
  return (
    <>
        <div className="w-12/12 flex flex-col items-center justify-start bg-none my-4">
           <h1 className='text-white font-bold'>Activities</h1>
            <div className='flex'>
            {activities?.map(each => <div key={each._id} className="w-6/12 rounded-md flex flex-col items-center p-1 m-2 bg-slate-100">
                <img className="w-[240px] h-[200px] object-cover rounded-md" src={each.photo} alt={each.name} />
                <p className="text-[16px] font-bold">{each.name}</p>
            </div>
            
            )}
            </div>
        </div>
    </>
)

}



