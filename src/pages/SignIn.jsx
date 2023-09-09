import { useRef } from "react";
import { Link as Anchor, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import user_actions from "../store/actions/users";
import Logged from "../components/Logged";
import Swal from "sweetalert2";
const { signin } = user_actions;
//import axios from "axios";
//import apiUrl from "../apiUrl";

export default function SignIn() {
  const navigate = useNavigate();
  const mail_signin = useRef("");
  const password_signin = useRef("");
  const dispatch = useDispatch();

  function handleSignIn() {
    let data = {
      mail: mail_signin.current.value,
      password: password_signin.current.value,
    };
    dispatch(signin({ data }))  
       .then((res) => {
      //console.log(res);
      if (res.payload.token) {
        Swal.fire({
          icon: "success",
          title: "Welcome!",
        });
        navigate("/");
      } else if (res.payload.messages.length > 0) {
        //let html = res.payload.messages.join('<br>')
        let html = res.payload.messages
          .map((each) => `<p>${each}</p>`)
          .join("");
        Swal.fire({
          title: "Something went wrong!",
          icon: "error",
          html,
        });
      }
    })
    .catch((err) => console.log(err));
}
  let user = useSelector(store=>store.users.user)
  console.log(user);

  return (
    
      <main className="flex flex-col md:flex-row m-0 md:m-10">
       <div className="flex justify-center items-center text-white font-bold text-[30px] sm:w-6/12 sm:mb-2 md:w-6/12 lg:w-7/12">My Tinerary</div>
       <div className="block mx-10 p-10 rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] my-3 sm:w-7/12 md:w-6/12 lg:w-4/12">
         <Logged/>
         <div>
          <p className="text-[25px] font-bold my-4">Sign In</p>
          <p className="flex text-sm">New user?{" "}
             <Anchor
             className="font-bold px-10 py-0 flex rounded text-[#4F46E5] hover:text-orange-600 "
             to='/signup'>Create an account
           </Anchor>
       </p>
    <form className="flex flex-col items-center justify-center p-[20px] w-12/12 bg-white">
      
      <input
        ref={mail_signin}
        type="text"
        className="text-center mb-[10px] bg-gray-100 appearance-none border-2 border-gray-100 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none"
        name="mail_signin"
        id="mail_signin"
        defaultValue=""
        placeholder="Mail"
        />
        <input
        ref={password_signin}
        type="password"
        className="text-center mb-[10px] bg-gray-100 appearance-none border-2 border-gray-100 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none"
        name="password_signin"
        id="password_signin"
        defaultValue=""
        placeholder="Password"
        />
        <a className="inline-block align-baseline font-bold text-sm text-[#4F46E5]" href="#">
        Forgot Password?
      </a>
        <input
        type="button"
        className="my-[10px] w-full shadow bg-[#4F46E5] hover:bg-orange-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded cursor-pointer"
        value="Sign In!"
        onClick={handleSignIn}
        />        
      </form>

     <div className="my-8 h-0.5 border-t-0 bg-neutral-200 opacity-100" />

               <div className='flex items-center justify-center w-[310px] h-[40px] border border-solid border-slate-900 mt-10 rounded-[80px] p-[15px] cursor-pointer'>
                    <img src="../../public/img/logogoogle.jpg" alt="" className='w-[30px] h-[30px] mr-2' />
                    <p className=' text-[14px] font-semibold ml-2'>Continue with Google</p>
                </div>                
             
      </div>
      </div>
      </main>

  )
}
