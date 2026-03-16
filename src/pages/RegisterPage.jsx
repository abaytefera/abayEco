import React, { useState } from "react"; // Added useState
import { Link } from "react-router-dom";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons"; // Added Icons

const Register = () => {
  // 1. State for password visibility
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center px-4 py-16">
        <section className="w-full max-w-xl grid md:grid-cols-1 gap-8">
          
          {/* Header Section */}
          <div className="text-center space-y-2">
            <h1 className="text-4xl font-black text-gray-900 tracking-tight">
              Create Your Account
            </h1>
            <p className="text-gray-500 font-medium">
              Already a member?{" "}
              <Link to="/login" className="text-blue-600 hover:underline font-bold">
                Sign In
              </Link>
            </p>
          </div>

          <div className="bg-white shadow-2xl shadow-gray-200/60 rounded-3xl p-8 md:p-10 border border-gray-100">
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              
              {/* Full Name */}
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Abebe Bikila"
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all"
                />
              </div>

              {/* Email */}
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="name@example.com"
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all"
                />
              </div>

              {/* Password with Toggle */}
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">
                  Password
                </label>
                <div className="relative">
                  <input
                    // 2. Dynamic type switching
                    type={showPassword ? "text" : "password"}
                    placeholder="Minimum 8 characters"
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all"
                  />
                  {/* 3. Toggle Button */}
                  <button
                    type="button" // Important: prevents form submission
                    onClick={togglePasswordVisibility}
                    className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-600 transition-colors p-1"
                  >
                    <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                  </button>
                </div>
                
                {/* Security Bars */}
                <div className="flex gap-2 pt-2">
                  <div className="h-1 flex-grow rounded-full bg-blue-500"></div>
                  <div className="h-1 flex-grow rounded-full bg-blue-500"></div>
                  <div className="h-1 flex-grow rounded-full bg-gray-200"></div>
                  <div className="h-1 flex-grow rounded-full bg-gray-200"></div>
                </div>
                <p className="text-[10px] text-gray-400 font-medium italic">
                  Password strength: <span className="text-blue-600 font-bold uppercase">Medium</span>
                </p>
              </div>

              {/* Terms Checkbox */}
              <div className="flex items-start gap-3 py-2">
                <input type="checkbox" id="terms" className="mt-1 w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                <label htmlFor="terms" className="text-xs text-gray-500 leading-relaxed">
                  I agree to the <span className="text-gray-800 font-bold underline cursor-pointer">Terms of Service</span> and <span className="text-gray-800 font-bold underline cursor-pointer">Privacy Policy</span>.
                </label>
              </div>

              {/* Action Button */}
              <button
                type="submit"
                className="w-full bg-gray-900 text-white py-4 rounded-2xl font-bold text-sm hover:bg-blue-600 shadow-xl shadow-blue-500/10 transform transition-all active:scale-[0.98]"
              >
                Create Account
              </button>

              <div className="relative flex items-center py-2">
                <div className="flex-grow border-t border-gray-100"></div>
                <span className="flex-shrink mx-4 text-gray-400 text-[10px] font-black uppercase tracking-widest">Quick Signup</span>
                <div className="flex-grow border-t border-gray-100"></div>
              </div>

              {/* Social Options */}
              <div className="grid grid-cols-2 gap-4">
                <button className="flex items-center justify-center gap-2 border border-gray-100 py-3 rounded-xl hover:bg-gray-50 transition font-bold text-xs uppercase tracking-tighter">
                  <FontAwesomeIcon icon={faGoogle} className="text-red-500 text-sm" />
                  Google
                </button>
                <button className="flex items-center justify-center gap-2 border border-gray-100 py-3 rounded-xl hover:bg-gray-50 transition font-bold text-xs uppercase tracking-tighter">
                  <FontAwesomeIcon icon={faGithub} className="text-sm" />
                  Github
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Register;