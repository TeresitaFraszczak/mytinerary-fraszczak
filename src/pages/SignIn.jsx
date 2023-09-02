import { useRef, useState} from "react";
import { Link as Anchor } from "react-router-dom";
//import axios from "axios";
//import apiUrl from "../apiUrl";

export default function SignIn() {
  const mail_signin = useRef("");
  const password_signin = useRef("");
  const [changeForm,setChangeForm]=useState(true);

  async function handleSignIn() {
    let data = {
      mail: mail_signin.current.value,
      password: password_signin.current.value,
    };
    console.log(data);
  }
  return (
    changeForm ? (
      <main className="flex flex-row m-12">
       <div className="w-8/12 flex justify-center items-center text-white font-bold text-[30px]">My Tinerary</div>
       <div className="block w-4/12 mx-12 p-10 rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
       <div>
       <p className="text-[12px] text-neutral-500">step 1 of 2</p>
       <p className="text-[20px] font-bold my-4">Sign In</p>
       <p className="flex text-[12px]">New user?{" "}
           <Anchor
             className="font-bold px-10 py-0 flex rounded text-[#4F46E5] hover:text-orange-600 "
             to='/signup'>Create an account
           </Anchor>
       </p>
    <form className="flex flex-col items-center justify-center p-[20px] w-[360px] bg-white m-auto">
      <h1 className="text-[36px] font-bold text-center mb-[10px]">Sign In!</h1>
      <input
        ref={mail_signin}
        type="text"
        className="text-center mb-[10px] bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-500"
        name="mail_signin"
        id="mail_signin"
        defaultValue=""
        placeholder="Type Mail"
        />
      </form>

     <div className="my-8 h-0.5 border-t-0 bg-neutral-200 opacity-100" /></div>
     <button type="button" data-te-ripple-init  data-te-ripple-color="light" className="m-3 h-9 w-20 rounded-lg bg-primary uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] ">
       <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
           <path  d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
        </svg>
     </button>            
     <button type="button" data-te-ripple-init data-te-ripple-color="light" className="m-3 h-9 w-20 rounded-lg bg-primary uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
        <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
        </svg>
      </button>
      <button className='m-2 px-10 py-0 flex w-2/4 rounded bg-[#4F46E5] hover:bg-orange-600 shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out text-white font-bold'> <span onClick={()=>setChangeForm(!changeForm)}>  Continue</span>
       </button> 
      </div>
      </main>

      ):(
        <main className="flex flex-row m-12">
       <div className="w-8/12 flex justify-center items-center text-white font-bold text-[30px]">My Tinerary</div>
       <div className="block w-4/12 mx-12 p-10 rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
       <div>
       <p className="text-[12px] text-neutral-500">step 2 of 2</p>
       <p className="text-[20px] font-bold my-4">Sign In</p>
       <p className="flex text-[12px]">New user?{" "}
           <Anchor
             className="font-bold px-10 py-0 flex rounded text-[#4F46E5] hover:text-orange-600 "
             to='/signup'>Create an account
           </Anchor>
       </p>
    <form className="flex flex-col items-center justify-center p-[20px] w-[360px] bg-white m-auto">
      <h1 className="text-[36px] font-bold text-center mb-[10px]">Sign In!</h1>
      <input
        ref={password_signin}
        type="password"
        className="text-center mb-[10px] bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
        name="password_signin"
        id="password_signin"
        defaultValue=""
        placeholder="Type Password"
      />
      <input
        type="button"
        className="mb-[10px] w-full shadow bg-[#4F46E5] hover:bg-orange-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded cursor-pointer"
        value="Sign In!"
        onClick={handleSignIn}
      />
    </form>
    <button type="button" data-te-ripple-init  data-te-ripple-color="light" className="m-3 h-9 w-20 rounded-lg bg-primary uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] ">
       <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
           <path  d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
        </svg>
     </button>            
     <button type="button" data-te-ripple-init data-te-ripple-color="light" className="m-3 h-9 w-20 rounded-lg bg-primary uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
        <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
        </svg>
      </button>
      </div>
      </div>
      </main>))
}
