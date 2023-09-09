import {useDispatch, useSelector} from 'react-redux'
import activity_actions from '../store/actions/activities'
import {useEffect} from 'react'

const {read_activities_from_itinerary} = activity_actions


export default function Activity({itinerary_id}){
  const dispatch = useDispatch()
  const activities = useSelector(store => store.activities_from_itinerary)
  console.log(activities)

  useEffect(
    ()=>{ 
      dispatch(read_activities_from_itinerary({ itinerary_id: itinerary_id}))
    }, []
      )

      return (
        <>
            <div className="w-[350px] h-[300px] flex flex-col items-center justify-start bg-slate-100 mb-4 sm:w-[750px] ">
                {activities?.map(each => <div key={each._id} className="w-5/12 flex flex-col items-center p-2 m-4 bg-slate-400">
                    <img className="w-[240px] h-[75px]" src={each.photo} alt={each.name} />
                    <p className="text-[14px] font-bold">{each.name}</p>
                </div>
                )}
            </div>
        </>
    )
      }