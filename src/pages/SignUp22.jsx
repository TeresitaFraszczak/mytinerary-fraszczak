import { useRef,useEffect,useState } from "react";
import axios from "axios";
import apiUrl from "../apiUrl";
import { Link as Anchor } from "react-router-dom";
import { useDispatch } from "react-redux";
import user_actions from "../store/actions/users"
const { read_6_users } = user_actions

export default function SignUp() {
  const name = useRef("");
  const lastName = useRef("");
  const country = useRef("");
  const photo = useRef("");
  const mail = useRef("");
  const password = useRef("");
  const [reload,setReload] = useState(false)
  const dispatch = useDispatch()
  const [changeForm,setChangeForm]=useState(true);

  useEffect(
    ()=>{dispatch(read_6_users())},
    [reload]
  )
  async function handleSignUp() {
    try {
      let data = {
        name: name.current.value,
        lastName: lastName.current.value,
        country: country.current.value,
        photo: photo.current.value,
        mail: mail.current.value,
        password: password.current.value,
      };
      await axios.post(
        apiUrl + "users/signup", //url del endpoind de creacion
        data //objeto con los datos para crear
      );
      setReload(!reload)
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    changeForm ? (
    <main className="flex flex-col md:flex-row m-0 md:m-10">
    <div className="flex justify-center items-center text-white font-bold text-[30px] sm:6/12 sm:mb-2 md:w-6/12 lg:w-7/12">My Tinerary</div>
    <div className="block mx-10 p-10 rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] my-3 sm:w-7/12 md:w-6/12 lg:w-4/12">
          <div>
          <p className="text-[12px] text-neutral-500">step 1 of 2</p>
          <p className="text-[20px] font-bold my-4">Create account</p>
          <p className="text-[12px]">Sign up with email</p>
          <div className="flex text-[12px]">Already have an account?{" "}
                <Anchor to={'/signin'} className="font-bold px-10 py-0 flex rounded text-[#4F46E5] hover:text-orange-600 "> Sign in </Anchor>
          </div>
                 <div className='flex items-center justify-center border border-solid border-slate-900 mt-5 rounded-[80px] p-[15px] cursor-pointer h-[40px] w-[310px]'>
                    <img src="../../public/img/logogoogle.jpg" alt="" className='w-[30px] h-[30px] mr-2' />
                    <p className=' text-[14px] font-semibold ml-2'>Continue with Google</p>
                </div>
                <div className='flex items-center justify-center w-[310px] h-[40px] border border-solid border-slate-900 mt-5 rounded-[80px] p-[15px] cursor-pointer'>
                    <img src="../../public/img/facebook.jpg" alt="" className='w-[23px] h-[23px] mr-2' />
                    <p className='text-[14px] font-semibold ml-2'>Continue with facebook</p>
                </div>
      
    <div className="my-7 h-0.5 border-t-0 bg-neutral-200 opacity-100" />

    <div className="flex justify-evenly">
      <form className="flex flex-col items-center justify-center p-[20px] w-[360px] bg-white">
        <h1 className="text-[25px] font-bold text-center mb-[10px]">
          Sign Up!
        </h1>
        <input
          ref={mail}
          type="text"
          className="text-center mb-[10px] bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          name="mail"
          id="mail"
          defaultValue=""
          placeholder="Type Mail"
        />
        <input
          ref={password}
          type="password"
          className="text-center mb-[10px] bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          name="password"
          id="password"
          defaultValue=""
          placeholder="Type Password"
        />
         <div className="flex h-[70px] items-end justify-end">
        <button className='justify-center m-2 px-10 mt-4 py-1 flex w-[100px] rounded bg-[#4F46E5] hover:bg-orange-600 shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out text-white font-bold'> <span onClick={()=>setChangeForm(!changeForm)}>Continue</span>
       </button> 
       </div>
       </form>
     </div>
     </div>
     </div>
   </main>
):(
<main className="flex flex-col md:flex-row m-0 md:m-10">
    <div className="flex justify-center items-center text-white font-bold text-[30px] sm:6/12 sm:mb-2 md:w-6/12 lg:w-7/12">My Tinerary</div>
    <div className="block mx-10 p-10 rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] my-3 sm:w-7/12 md:w-6/12 lg:w-4/12">
          <div>
          <p className="text-[12px] text-neutral-500">step 2 of 2</p>
          <p className="text-[20px] font-bold my-4">Create account</p>
          <p className="text-[12px]">Sign up with email</p>
          <div className="flex text-[12px]">Already have an account?{" "}
                <Anchor to={'/signin'}className="font-bold px-10 py-0 flex rounded text-[#4F46E5] hover:text-orange-600 "> Sign in </Anchor>
          </div>
               <div className=' flex items-center justify-center w-[310px] h-[40px] border border-solid border-slate-900 mt-10 rounded-[80px] p-[15px] cursor-pointer'>
                    <img src="../../public/img/logogoogle.jpg" alt="" className='w-[30px] h-[30px] mr-2' />
                    <p className=' text-[14px] font-semibold ml-2'>Continue with Google</p>
                </div>
                <div className=' flex items-center justify-center w-[310px] h-[40px] border border-solid border-slate-900 mt-5 rounded-[80px] p-[15px] cursor-pointer'>
                    <img src="../../public/img/facebook.jpg" alt="" className='w-[23px] h-[23px] mr-2' />
                    <p className=' text-[14px] font-semibold ml-2'>Continue with facebook</p>
                </div>
      
    <div className="my-8 h-0.5 border-t-0 bg-neutral-200 opacity-100" /></div>
    <div className="flex justify-evenly">
      <form className="flex flex-col items-center justify-center p-[20px] w-[360px] bg-white">
        <h1 className="text-[25px] font-bold text-center mb-[10px]">
          Sign Up!
        </h1>
        <input
          ref={name}
          type="text"
          className="text-center mb-[10px] bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-500"
          name="name"
          id="name"
          defaultValue=""
          placeholder="Type Name"
        />
        <input
          ref={lastName}
          type="text"
          className="text-center mb-[10px] bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-500"
          name="lastName"
          id="lastName"
          defaultValue=""
          placeholder="Type Last Name"
        />
        <input
          ref={country}
          type="text"
          className="text-center mb-[10px] bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-500"
          name="country"
          id="country"
          defaultValue=""
          placeholder="Type country"
        />
        <input
          ref={photo}
          type="text"
          className="text-center mb-[10px] bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-500"
          name="photo"
          id="photo"
          defaultValue=""
          placeholder="Type Photo"
        />      
         <input
          type="button"
          className="mb-5 w-full shadow bg-[#4F46E5] hover:bg-orange-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded cursor-pointer"
          value="Sign Up!"
          onClick={handleSignUp}
        />
         </form>
     
    </div>
    </div>
   </main>
  ))
}