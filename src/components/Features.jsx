export default function Features() {
    return (
      <div className="bg-slate-200 flex flex-col justify-center items-center font-bold">
        <h1 className="font-bold text-2xl">Features</h1>
        <div className="flex grid gap-4 grid-cols-3 m-5 p-5">
                <div className="h-[350px] w-[250px] flex flex-col rounded-lg items-center bg-gradient-to-r from bg-cyan-100 to bg-sky-300"> <img className="h-[200px] mt-10"  src="../img/money.png"/>
                <p className="text-[14px] mt-10">Currency:</p>
                </div>
                <div className="h-[350px] w-[250px] flex flex-col rounded-lg items-center bg-violet-400"> <img className="h-[200px] mt-10"  src="../img/country.png"/>
                <p className="text-[14px] mt-10 ">Country:</p>
                </div>
                <div className="h-[350px] w-[250px] flex flex-col rounded-lg items-center bg-violet-200"> <img className="h-[200px] mt-10"  src="../img/language.png"/>
                <p className="text-[14px] mt-10">Languages:</p>
                </div>
                

            </div>
      
      </div>
    )
  }
  