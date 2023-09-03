export default function Card({src, alt, city}) {
  return (
  
    <div className="h-[250px] w-[140px] bg-cover bg-center rounded-lg shadow-lg hover:-translate-y-12" style={{backgroundImage:`url(${src})`}}>
    <p id="shadows" className="px-3 py-1 text-sm font-bold text-white mb-2">{city}</p>
    </div> 
   
  )
}
