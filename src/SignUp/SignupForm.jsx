import { FcGoogle } from "react-icons/fc"
import { NavLink } from "react-router-dom"
import InputGenerator from "../common/InputGenerator"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useSignupMutation } from "../RTK/SignUpApi"
function SignupForm() {
  const navigate=useNavigate()
  const[sendToDataBase]=useSignupMutation()
const [signupform,setSignupform]=useState({fullName:"",email:"",password:""})
const STYLE="border-b border-gray-300 outline-none py-2 w-full focus:border-blue-600"
const handleChange=(e)=>{
  const{name,value}=e.target
  setSignupform(p=>({...p,[name]:value}))
}
const checkAndSendFormToDB=()=>{
  if(signupform.fullName&&signupform.email&&signupform.password){
    sendToDataBase(signupform)
   setSignupform({fullName:"",email:"",password:""})
   navigate('/')
   return
  }

}
  return (

    <div className="grid md:grid-cols-2 gap-16 px-16 py-10 items-center mb-15">
      <img 
        src="/SignUpImage.png"
        alt="Sign Up"
        className="w-full h-[600px] object-cover rounded-md"
      />
      <div className="max-w-sm mx-auto w-full">
        <h1 className="text-3xl font-bold mb-3">Create an account</h1>
        <p className="text-gray-500 mb-8">Enter your details below</p>

        <div className="grid gap-8">
          <InputGenerator
            name="fullName"
            placeholder="fullName"
            type="text"
            value={signupform.fullName}
            onChange={handleChange}
            STYLE={STYLE}
          />

                    <InputGenerator
            name="email"
            placeholder="Email or Phone Number"
            type="email"
            value={signupform.email}
            onChange={handleChange}
            STYLE={STYLE}
          />
             <InputGenerator
            name="password"
            placeholder="password"
            type="password"
            value={signupform.password}
            onChange={handleChange}
            STYLE={STYLE}
          />


          <button 
          onClick={checkAndSendFormToDB}
          className="bg-[#DB4444] text-white py-3 rounded-md w-full hover:bg-red-600">
            Create Account
          </button>

          <button className="flex items-center justify-center gap-3 border border-gray-300 rounded-md py-3 w-full">
            <FcGoogle className="text-xl" />
            <span>Sign up with Google</span>
          </button>

          <p className="text-center text-sm">
            Already have account?{" "}
            <NavLink to="/login" className="underline">Log in</NavLink>
          </p>
        </div>
      </div>
    </div>
  )
}

export default SignupForm