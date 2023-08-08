

export default function Buttoncarrous({ value, onClick }) {
  return (
    
   <div className="absolute flex flex-end -translate-y-12">
   <input type='button' value={value} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={onClick}/>
   </div>
  );
}
