import { useRef } from 'react'
import { useState } from 'react'
import axios from 'axios'
import apiUrl from '../apiUrl'
import Swal from "sweetalert2";
import { Link as Anchor, useNavigate } from 'react-router-dom'

export default function FormSignUp() {
  const navigate = useNavigate();
  const name = useRef("")
  const lastName = useRef("")
  const country = useRef("")
  const photo = useRef("")
  const mail = useRef("")
  const password = useRef("")
  


  async function handleSignUp() {
    try {
      let data = {
        name: name.current.value,
        lastName: lastName.current.value,
        country: document.getElementById('countries').value,
        //country: country.current.value,
        photo: photo.current.value,
        mail: mail.current.value,
        password: password.current.value
      }

      if (photo.current.value === "") {
        delete data.photo
      }

      await axios.post(
        apiUrl + 'auth/register',
        data
      )
      console.log(data);
      if (data) {
        Swal.fire({
          icon: "success",
          title: "User Created!",
        });
        handleSignUp()
        navigate("/");
      }

    } catch (error) {
      let falla = error.response.data.messages

      Swal.fire({
        title: "Something went wrong!",
        icon: "error",
        html: falla.map(each => `<p>${each}</p>`).join(''),
      });
    }
  }

  return (

    <main className="flex flex-col md:flex-row m-0 md:m-10">
      <div className="flex justify-center items-center text-white font-bold text-[30px] sm:6/12 sm:mb-2 md:w-6/12 lg:w-7/12">My Tinerary</div>
      <div className="block mx-10 p-10 rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] my-3 sm:w-7/12 md:w-6/12 lg:w-4/12">
        <div>
          <p className="text-[20px] font-bold my-4">Create account</p>
          <p className="text-[12px]">Sign up with email</p>
          <div className="flex text-[12px]">Already have an account?{" "}
            <Anchor to={'/signin'} className="font-bold px-10 py-0 flex rounded text-[#4F46E5] hover:text-orange-600 "> Sign in </Anchor>
          </div>
          <div className='flex items-center justify-center border border-solid border-slate-900 mt-5 rounded-[80px] p-[15px] cursor-pointer h-[40px] w-[310px]'>
            <img src="../../public/img/logogoogle.jpg" alt="" className='w-[30px] h-[30px] mr-2' />
            <p className=' text-[14px] font-semibold ml-2'>Continue with Google</p>
          </div>

          <div className="my-7 h-0.5 border-t-0 bg-neutral-200 opacity-100" />

          <div className="flex justify-evenly">
            <form className="flex flex-col items-center justify-center p-[20px] w-[360px] bg-white">

              <input
                ref={mail}
                type="text"
                className="text-center mb-[10px] bg-gray-100 appearance-none border-2 border-gray-100 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-600"
                name="mail"
                id="mail"
                defaultValue=""
                placeholder="Mail"
              />
              <input
                ref={password}
                type="password"
                className="text-center mb-[10px] bg-gray-100 appearance-none border-2 border-gray-100 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-600"
                name="password"
                id="password"
                defaultValue=""
                placeholder="Password"
              />
              <input
                ref={name}
                type="text"
                className="text-center mb-[10px] bg-gray-100 appearance-none border-2 border-gray-100 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-600"
                name="name"
                id="name"
                defaultValue=""
                placeholder="Name"
              />
              <input
                ref={lastName}
                type="text"
                className="text-center mb-[10px] bg-gray-100 appearance-none border-2 border-gray-100 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-600"
                name="lastName"
                id="lastName"
                defaultValue=""
                placeholder="Last Name"
              />
              <div className='flex items-center justify-center my-2 text-center mb-[10px] bg-gray-100 appearance-none border-2 border-gray-100 rounded w-full  px-4 text-gray-700 leading-tight focus:outline-none focus:border-orange-600'>
                <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-300 bg-gray-100"></label>
                <select id="countries" className="flex text-m appearance-none my-2 mx-5 bg-gray-100 text-gray-400 items-center">
                  <option value="disable" ref={country}>Select Country</option>
                  <option value="Argentina" ref={country}>Argentina</option>
                  <option value="Usa" ref={country}>United States</option>
                  <option value="Canada" ref={country}>Canada</option>
                  <option value="France" ref={country}>France</option>
                  <option value="Germany" ref={country}>Germany</option>
                  <option value="Brazil" ref={country}>Brazil</option>
                  <option value="England" ref={country}>England</option>
                  <option value="Mexico" ref={country}>Mexico</option>
                </select>
              </div>
              <input
                ref={photo}
                type="text"
                className="text-center mb-[10px] bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-600"
                name="photo"
                id="photo"
                defaultValue=""
                placeholder="Type Photo"
              />
              <input
                type="button"
                className="mb-5 w-full shadow bg-[#4F46E5] hover:bg-orange-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded cursor-pointer"
                value="Sign Up!"
                onClick={handleSignUp}
              />
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}

