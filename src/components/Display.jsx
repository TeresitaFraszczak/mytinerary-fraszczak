import { Link as Anchor } from "react-router-dom"

export default function Display() {
  return (
    <div className="flex flex-col ms-5 absolute top-[80px] left-[100px] gap-1 p-2 rounded-xl">
    <Anchor href="./home" className="text-white font-bold font-medium px-3 py-2 text-center">Home</Anchor>
    <Anchor to="./cities" className="text-white font-bold font-medium px-3 py-2 text-center">Cities</Anchor>
    </div>
  )
}