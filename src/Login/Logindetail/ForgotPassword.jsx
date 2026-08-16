import { useState } from "react"
import { Link } from "react-router-dom"
import { useForgotPasswordMutation } from "../../RTK/passwordApi"
import NavLinks from "../../common/NavLinks"

function ForgotPassword() {
  const [email, setEmail] = useState("")
  const [sent, setSent] = useState(false)
  const [error, setError] = useState("")

  const [forgotPassword, { isLoading }] = useForgotPasswordMutation()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email) {
      setError("Please enter your email")
      return
    }

    try {
      await forgotPassword(email).unwrap()
      setSent(true)
    } catch (err) {
      setError(err.data?.message || "Something went wrong")
    }
  }

  return (
    <div>
      <NavLinks />
      <div className="max-w-md mx-auto px-4 py-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2 text-text-primary">Forgot Password</h1>

        {sent ? (
          <p className="text-gray-500 text-sm mt-4">
            If that email exists, a reset link has been sent. Check your inbox.
          </p>
        ) : (
          <>
            <p className="text-gray-500 text-sm mb-8">
              Enter your account email and we'll send you a link to reset your password.
            </p>

            <form onSubmit={handleSubmit} className="grid gap-6">
              {error && (
                <p className="text-red-600 text-sm font-medium bg-red-50 dark:bg-red-950/40 p-3 rounded-lg border border-red-200 dark:border-red-800">
                  {error}
                </p>
              )}

              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border-b border-gray-300 dark:border-gray-700 bg-transparent outline-none py-2.5 w-full focus:border-[#DB4444] transition-colors text-text-primary"
              />

              <button
                type="submit"
                disabled={isLoading}
                className="bg-[#DB4444] text-white py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors disabled:opacity-50"
              >
                {isLoading ? "Sending..." : "Send Reset Link"}
              </button>
            </form>
          </>
        )}

        <p className="text-center text-sm text-gray-500 mt-8">
          <Link to="/login" className="text-[#DB4444] hover:underline">Back to Log In</Link>
        </p>
      </div>
    </div>
  )
}

export default ForgotPassword