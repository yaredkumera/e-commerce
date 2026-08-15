import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";

import { useLoginMutation } from "../../RTK/LoginApi";
import { login } from "./AuthSlice";
import InputGenerator from "../../common/InputGenerator";
import toast from 'react-hot-toast';

export default function LoginForm() {
  const [loginToAccount] = useLoginMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async (e) => {
    if (e) e.preventDefault();
    if (!(form.email && form.password)) {
      toast.error("Please fill out all fields", { duration: 3000 });
      return;
    }
    try {
      const data = await loginToAccount(form).unwrap();
      localStorage.setItem("token", data.token);
      localStorage.setItem("currentUser", data.user);
      localStorage.setItem("role", data.role);
      dispatch(login(data.user));

      toast.success("Logged in successfully!", { duration: 3000 });
      setForm({ email: "", password: "" });
      if (data.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/");
      }
    } catch (err) {
      const errorMessage = err.data?.message || "Login Failed";
      setError(errorMessage);
      toast.error(errorMessage, { duration: 3000 });
    }
  };

  const inputStyle =
    "border-b border-gray-300 dark:border-gray-700 bg-transparent outline-none py-2.5 w-full focus:border-[#DB4444] transition-colors text-text-primary text-sm sm:text-base";

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-14">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Banner Image - Visible on all screen sizes */}
        <div className="w-full h-[220px] sm:h-[320px] md:h-[380px] lg:h-[500px] rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800 shadow-sm">
          <img
            src="/SignUpImage.png"
            alt="Log In"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Form Container */}
        <div className="max-w-md mx-auto md:mx-0 w-full bg-bg-secondary p-2 sm:p-4">
          <h1 className="text-2xl sm:text-3xl font-bold mb-2 text-text-primary">
            Log in to Exclusive
          </h1>
          <p className="text-sm text-gray-500 mb-6 sm:mb-8">Enter your details below</p>

          <form onSubmit={handleLogin} className="relative grid gap-6 sm:gap-8">
            {error && (
              <p className="font-semibold text-red-600 text-xs sm:text-sm bg-red-50 dark:bg-red-950/40 p-3 rounded-lg border border-red-200 dark:border-red-800">
                {error}
              </p>
            )}

            <InputGenerator
              name="email"
              placeholder="Email or Phone Number"
              type="text"
              value={form.email}
              onChange={handleChange}
              STYLE={inputStyle}
            />

            <InputGenerator
              name="password"
              placeholder="Password"
              type="password"
              value={form.password}
              onChange={handleChange}
              STYLE={inputStyle}
            />

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
              <button
                type="submit"
                className="w-full sm:w-auto bg-[#DB4444] text-white py-3 px-8 rounded-lg font-semibold text-sm hover:bg-red-600 transition-colors cursor-pointer shadow-sm"
              >
                Log In
              </button>
              <NavLink
                to="/forgot-password"
                className="text-[#DB4444] text-xs sm:text-sm font-medium hover:underline"
              >
                Forgot Password?
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}