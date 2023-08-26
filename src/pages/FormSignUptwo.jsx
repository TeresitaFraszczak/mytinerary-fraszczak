import { useRef,useState} from "react";
import axios from "axios";
import apiUrl from "../apiUrl";
import { Link as Anchor } from "react-router-dom";

export default function Form() {
  const name = useRef("");
  const lastName = useRef("");
  const country = useRef("");
  const photo = useRef("");
  const mail = useRef("");
  const password = useRef("");
  const [changeForm,setChangeForm]=useState(true);

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
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    changeForm ? (  
    <div className="flex flex-row m-12">
    <div className="w-8/12 flex justify-center items-center text-white font-bold text-[30px]">My Tinerary</div>
    <div className="block w-4/12 mx-12 p-10 rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
    <div>
    <p className="text-[12px] text-neutral-500">step 2 of 2</p>
    <p className="text-[20px] font-bold my-4">Create account</p>
    <p className="flex text-[12px]">Already have an account?{" "}
    <p className="font-bold px-10 py-0 flex rounded text-[#4F46E5] hover:text-orange-600 "><span onClick={()=>setChangeForm(!changeForm)}> Sign in </span></p>
    </p>
   
    <div className="my-8 h-0.5 border-t-0 bg-neutral-200 opacity-100" /></div>

    <form className="flex flex-col">
      <input ref={name} type="text" className="block min-h-[auto] w-full p-3" name="name" id="name" defaultValue="" placeholder="Name"
      />
      <input ref={lastName} type="text" className="block min-h-[auto] w-full p-3" id="lastName" defaultValue=""
        placeholder="Last Name" />
      <input ref={country} type="text" className="block min-h-[auto] w-full p-3" name="country" id="country"
        defaultValue="" placeholder="Country"/>
      <input ref={photo} type="text" className="block min-h-[auto] w-full p-3" name="photo" id="photo" defaultValue=""
        placeholder="Photo"/>
       <button className='m-2 px-10 py-0 flex w-2/4 rounded bg-[#4F46E5] hover:bg-orange-600 shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out'> 
       <Anchor to={ '/singup'} className="font-medium px-0 py-1 text-white">SIGN UP!</Anchor>
       </button> 
   
   
   </form> 
   </div>
   </div>
   ):(
   <div className="flex flex-row m-12">
       <div className="w-8/12 flex justify-center items-center text-white font-bold text-[30px]">My Tinerary</div>
       <div className="block w-4/12 mx-12 p-10 rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
       <div>
       <p className="text-[12px] text-neutral-500">step 1 of 2</p>
       <p className="text-[20px] font-bold my-4">Sign In</p>
       <p className="flex text-[12px]">New user?{" "}
           <Anchor
             className="font-bold px-10 py-0 flex rounded text-[#4F46E5] hover:text-orange-600 "
             to='/auth/signup'>Create an account
           </Anchor>
       </p>
         
       
       <input ref={mail}  type="text"  className="block min-h-[auto] w-full p-3" name="mail" id="mail"  defaultValue="" placeholder="Mail"  />
       
       <button className='m-2 px-10 py-0 flex w-2/4 rounded bg-[#4F46E5] hover:bg-orange-600 shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out'> 
          <Anchor to={ '/auth/singintwo'} className="font-medium px-0 py-1">Continue</Anchor>
          </button> 

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

      </div>
      </div>)


   )}


    