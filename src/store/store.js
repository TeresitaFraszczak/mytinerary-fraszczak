import { configureStore } from "@reduxjs/toolkit";
import  city_reducer from "./reducers/cities";
import itinerary_reducer from "./reducers/itineraries";

export default configureStore({
    reducer:{
    itineraries: itinerary_reducer,
    cities: city_reducer,
    users:{users:[]},
    }
})