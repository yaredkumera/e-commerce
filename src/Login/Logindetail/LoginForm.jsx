import { NavLink, useNavigate } from "react-router-dom"
import { useState } from "react"
import { login } from "./AuthSlice"
import { useDispatch } from "react-redux"
import InputGenerator from "../../CheckOut/ChecOutDetals/InputGenerator"

function LoginForm() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [form, setForm] = useState({ email: "", password: "" })
  const [error, setError] = useState("")

 const handleChange = (e) => {
  const { name, value } = e.target
  setForm(prev => ({ ...prev, [name]: value }))
}

  const handleLogin = () => {
    if (form.email && form.password) {
      dispatch(login(form))
      setForm({ email: "", password: "" })
      navigate("/")
      return
    }
    setError("Please fill out both fields")
  }

  let Style = "border-b border-gray-300 outline-none py-2 w-full focus:border-blue-400"

  return (
    <div className="grid md:grid-cols-2 gap-16 px-16 py-10 items-center mb-15">
      <img src="/SignUpImage.png" alt="Log In" className="w-full h-[500px] object-cover" />

      <div className="max-w-sm mx-auto w-full">
        <h1 className="text-3xl font-bold mb-3">Log in to Exclusive</h1>
        <p className="text-gray-500 mb-8">Enter your details below</p>

        <div className="relative grid gap-8">
          {error && (
            <p className="font-semibold text-red-600 text-sm">{error}</p>
          )}

<InputGenerator
  name="email"
  placeholder="Email or Phone Number"
  type="text"
  value={form.email}
  onChange={handleChange}
  STYLE={Style}
/>
<InputGenerator
  name="password"
  placeholder="Password"
  type="password"
  value={form.password}
  onChange={handleChange}
  STYLE={Style}
/>

          <div className="flex items-center justify-between">
            <button
              onClick={handleLogin}
              className="bg-[#DB4444] text-white py-3 px-10 rounded-md hover:bg-red-600"
            >
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