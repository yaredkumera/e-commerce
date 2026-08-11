import { useState } from "react";
import { NavLink } from "react-router-dom";
import NavLinks from "../../common/NavLinks";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;

    setSubmitted(true);
    console.log("Password reset link sent to:", email);
  };

  return (
    <div className="min-h-screen bg-bg-secondary text-text-primary flex flex-col overflow-x-hidden">
      <NavLinks />

      <div className="flex-1 flex items-center justify-center px-4 py-8 sm:py-12">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="text-center mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold mb-2">Forgot Password?</h1>
            <p className="text-xs sm:text-sm text-gray-500 max-w-xs mx-auto">
              No worries. Enter your email and we'll help you reset your password.
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-bg-primary border border-gray-200 dark:border-gray-800 rounded-2xl p-6 sm:p-8 shadow-sm">
            {submitted ? (
              <div className="text-center py-4 space-y-4">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-950 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mx-auto text-xl">
                  ✓
                </div>
                <p className="text-sm font-medium text-text-primary">
                  Reset link sent! Please check your inbox at <span className="font-semibold">{email}</span>.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs text-[#DB4444] underline font-medium cursor-pointer"
                >
                  Send to a different email
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid gap-5">
                <div>
                  <label className="block mb-2 text-xs sm:text-sm font-medium text-text-primary">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-bg-secondary text-text-primary border border-gray-200 dark:border-gray-800 outline-none focus:border-[#DB4444] transition-colors text-xs sm:text-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-[#DB4444] text-white font-semibold text-xs sm:text-sm hover:bg-red-600 transition-colors shadow-sm cursor-pointer"
                >
                  Send Reset Link
                </button>
              </form>
            )}

            <div className="text-center mt-6 pt-4 border-t border-gray-100 dark:border-gray-800">
              <NavLink
                to="/login"
                className="text-xs sm:text-sm font-medium text-[#DB4444] hover:underline inline-flex items-center gap-1"
              >
                ← Back to Login
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;