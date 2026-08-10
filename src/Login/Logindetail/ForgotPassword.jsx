import { useState } from "react"
import { NavLink } from "react-router-dom"
import NavLinks from "../../common/NavLinks"
function ForgotPassword() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!email) {
      return
    }

    console.log("Email:", email)
  }

  return (
    <div>
        <NavLinks/>
    <div className="min-h-screen bg-bg-secondary text-text-primary flex items-center justify-center px-6">

      <div className="w-full max-w-md">

       
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-3">
            Forgot Password?
          </h1>

          <p className="text-text-secondary">
            No worries. Enter your email and we'll help you reset your password.
          </p>
        </div>

      
        <div className="bg-bg-primary rounded-xl p-8 shadow-lg">

          <form onSubmit={handleSubmit} className="grid gap-6">

            <div>
              <label className="block mb-2 font-medium">
                Email Address
              </label>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg
                bg-bg-secondary
                text-text-primary
                border border-gray-300
                outline-none
                focus:border-red-500
                transition"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-lg
              bg-[#DB4444]
              text-white font-semibold
              hover:bg-red-600
              transition"
            >
              Send Reset Link
            </button>

          </form>

         
          <div className="text-center mt-6">
            <NavLink
              to="/login"
              className="text-[#DB4444] hover:underline"
            >
              ← Back to Login
            </NavLink>
          </div>

        </div>

      </div>
    </div>
    </div>
  )
}
export default ForgotPassword