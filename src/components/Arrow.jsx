export default function Arrow({direction}) {
      
    return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 m-2">
  <path fillRule="evenodd" d={direction} clipRule="evenodd" />
</svg>
    
  )
}
