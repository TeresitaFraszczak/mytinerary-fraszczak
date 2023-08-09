import Arrow from '../components/Arrow';
import Card from '../components/Card';
import { useState } from 'react';

export default function Carrousel({ data }) {
  let [counter,setCounter] = useState(0)
  let [counterTo,setCounterTo] = useState(4)

  function next_slide() {
    if (data.length <= counterTo) {
      setCounter(0)
      setCounterTo(4)
    } else {
      setCounter(counter+4)
      setCounterTo(counterTo+4)
    }
    console.log(counter);
    console.log(counterTo);
  }
  function prev_slide() {
    if (counter <= 0) {
      setCounter(data.length-4)
      setCounterTo(data.length)
    } else {
      setCounter(counter-4)
      setCounterTo(counterTo-4)
    }
    console.log(counter);
    console.log(counterTo);
  }
  return (
    <div className="w-8/12 flex flex-col items-center justify-center">
      <h3 className="text-white text-2xl font-bold mb-5">Popular Mytineraries!</h3>
    
    <div className='flex grow items-center'> 
     <Arrow direction={"M13.28 3.97a.75.75 0 010 1.06L6.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0zm6 0a.75.75 0 010 1.06L12.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z" } onClick={prev_slide}/> 
       <div className="grid gap-2 grid-cols-4">
       {data.slice(counter, counterTo).map((each, index)=> <Card key={each.id} src={each.photo} alt={each.id} city={each.city}/>)}
       </div> 
      
     <Arrow direction={"M4.72 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 010-1.06zm6 0a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 010-1.06z"} onClick={next_slide} />
     </div>
     </div>
  )
}
