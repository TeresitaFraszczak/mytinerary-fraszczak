export default function Card({src, alt, city}) {
  return (
    <div className="relative h-[124px] w-full max-w-[300px] text-center shadow-lg hover:bg-gradient-to-r">
    <img className="rounded h-full w-full bg-cover bg-center" src={src} alt={alt} />
    <p className="absolute px-6 py-1 font-bold text-xl mb-2">{city}</p>
 </div> 
  )
}
