import { NavLink } from "react-router-dom"

function LoginForm() {
  return (
    <div className="grid md:grid-cols-2 gap-16 px-16 py-10 items-center mb-15">
      <img
        src="/SignUpImage.png"
        alt="Log In"
        className="w-full h-[500px] object-cover"
      />

      <div className="max-w-sm mx-auto w-full">
        <h1 className="text-3xl font-bold mb-3">Log in to Exclusive</h1>
        <p className="text-gray-500 mb-8">Enter your details below</p>

        <div className="grid gap-8">
          <input
            type="text"
            placeholder="Email or Phone Number"
            className="border-b border-gray-300 outline-none py-2 w-full focus:border-blue-400"
          />
          <input
            type="password"
            placeholder="Password"
            className="border-b border-gray-300 outline-none py-2 w-full focus:border-blue-400"
          />

          <div className="flex items-center justify-between">
            <button className="bg-[#DB4444] text-white py-3 px-10 rounded-md hover:bg-red-600">
              Log In
            </button>
            <NavLink to="/forgot-password" className="text-[#DB4444] text-sm">
              Forget Password?
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginForm