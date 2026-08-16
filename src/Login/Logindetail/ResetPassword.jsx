import { useState } from "react";
import { useParams, useNavigate, NavLink } from "react-router-dom";
import NavLinks from "../../common/NavLinks";
import { useResetPasswordMutation } from "../../RTK/PasswordApi";

function ResetPassword() {
  const { token } = useParams();
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const [resetPassword, { isLoading }] = useResetPasswordMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!password || !confirmPassword) {
      setError("Please fill out both fields");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      await resetPassword({ token, password }).unwrap();
      setSuccess(true);
      setTimeout(() => navigate("/login"), 2000);
    } catch (err) {
      setError(err.data?.message || "Reset link is invalid or has expired");
    }
  };

  return (
    <div className="min-h-screen bg-bg-secondary text-text-primary flex flex-col overflow-x-hidden">
      <NavLinks />

      <div className="flex-1 flex items-center justify-center px-4 py-8 sm:py-12">
        <div className="w-full max-w-md">
          <div className="text-center mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold mb-2">Reset Password</h1>
            <p className="text-xs sm:text-sm text-gray-500 max-w-xs mx-auto">
              Enter a new password for your account.
            </p>
          </div>

          <div className="bg-bg-primary border border-gray-200 dark:border-gray-800 rounded-2xl p-6 sm:p-8 shadow-sm">
            {success ? (
              <div className="text-center py-4 space-y-4">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-950 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mx-auto text-xl">
                  ✓
                </div>
                <p className="text-sm font-medium text-text-primary">
                  Password reset successful! Redirecting you to log in...
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid gap-5">
                {error && (
                  <p className="text-red-600 text-xs bg-red-50 dark:bg-red-950/40 p-3 rounded-lg border border-red-200 dark:border-red-800">
                    {error}
                  </p>
                )}

                <div>
                  <label className="block mb-2 text-xs sm:text-sm font-medium text-text-primary">
                    New Password
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter new password"
                    className="w-full px-4 py-3 rounded-lg bg-bg-secondary text-text-primary border border-gray-200 dark:border-gray-800 outline-none focus:border-[#DB4444] transition-colors text-xs sm:text-sm"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-xs sm:text-sm font-medium text-text-primary">
                    Confirm New Password
                  </label>
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm new password"
                    className="w-full px-4 py-3 rounded-lg bg-bg-secondary text-text-primary border border-gray-200 dark:border-gray-800 outline-none focus:border-[#DB4444] transition-colors text-xs sm:text-sm"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3 rounded-lg bg-[#DB4444] text-white font-semibold text-xs sm:text-sm hover:bg-red-600 transition-colors shadow-sm cursor-pointer disabled:opacity-50"
                >
                  {isLoading ? "Resetting..." : "Reset Password"}
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

export default ResetPassword;