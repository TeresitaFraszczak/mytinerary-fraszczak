import { createReducer } from "@reduxjs/toolkit";
import city_actions from "../actions/cities";

const {read_cities,read_city} = city_actions
const initial_state = {    
    cities: [],
    city: {}
    
}

const city_reducer = createReducer(
    initial_state,                  //estado incial
    builder => builder.addCase(     //callback contructora de estados globales (agrega (mín) un caso de reduccion para cada accion)
        read_cities.fulfilled,
        (state,action)=> {
            let new_state = {
                ...state,
                cities: action.payload.cities
            }
            return new_state
        }
    )
       

.addCase(
    read_city.fulfilled,
    (state,action)=> {
        let new_state = {
            ...state,
            city: action.payload.city
        }
        return new_state
    }
)
)

export default city_reducer