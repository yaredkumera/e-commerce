import { FcGoogle } from "react-icons/fc";
import { NavLink, useNavigate } from "react-router-dom";
import InputGenerator from "../common/InputGenerator";
import { useState } from "react";
import { useSignupMutation } from "../RTK/SignUpApi";
import GoogleButton from "./GoogleButton";
function SignupForm() {
  const navigate = useNavigate();
  const [sendToDataBase] = useSignupMutation();
  const [signupform, setSignupform] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const STYLE =
    "border-b border-gray-300 dark:border-gray-700 bg-transparent outline-none py-2.5 w-full focus:border-[#DB4444] transition-colors text-text-primary text-sm sm:text-base";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupform((p) => ({ ...p, [name]: value }));
  };

  const checkAndSendFormToDB = () => {
    if (signupform.fullName && signupform.email && signupform.password) {
      sendToDataBase(signupform);
      setSignupform({ fullName: "", email: "", password: "" });
      navigate("/");
      return;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-14">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Banner Image - Dynamic heights for mobile & desktop */}
        <div className="w-full h-[220px] sm:h-[320px] md:h-[480px] lg:h-[600px] rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800 shadow-sm">
          <img
            src="/SignUpImage.png"
            alt="Sign Up"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Form Container */}
        <div className="max-w-md mx-auto md:mx-0 w-full bg-bg-secondary p-2 sm:p-4">
          <h1 className="text-2xl sm:text-3xl font-bold mb-2 text-text-primary">
            Create an account
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-6 sm:mb-8">
            Enter your details below
          </p>

          <div className="grid gap-6 sm:gap-8">
            <InputGenerator
              name="fullName"
              placeholder="Full Name"
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
              placeholder="Password"
              type="password"
              value={signupform.password}
              onChange={handleChange}
              STYLE={STYLE}
            />

            <button
              onClick={checkAndSendFormToDB}
              className="bg-[#DB4444] text-white py-3 rounded-lg w-full hover:bg-red-600 font-semibold text-xs sm:text-sm transition-colors cursor-pointer shadow-sm mt-2"
            >
              Create Account
            </button>

          
            <GoogleButton/>

            <p className="text-center text-xs sm:text-sm text-gray-600 dark:text-gray-400">
              Already have account?{" "}
              <NavLink
                to="/login"
                className="underline text-text-primary font-medium hover:text-[#DB4444]"
              >
                Log in
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupForm;