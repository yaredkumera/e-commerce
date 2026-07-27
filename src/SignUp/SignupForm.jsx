import { FcGoogle } from "react-icons/fc"
import { NavLink } from "react-router-dom"

function SignupForm() {
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
          <input
            type="text"
            placeholder="Name"
            className="border-b border-gray-300 outline-none py-2 w-full focus:border-blue-600"
          />
          <input
            type="text"
            placeholder="Email or Phone Number"
            className="border-b border-gray-300 outline-none py-2 w-full focus:border-blue-600"
          />
          <input
            type="password"
            placeholder="Password"
            className="border-b border-gray-300 outline-none py-2 w-full focus:border-blue-600"
          />

          <button className="bg-[#DB4444] text-white py-3 rounded-md w-full hover:bg-red-600">
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