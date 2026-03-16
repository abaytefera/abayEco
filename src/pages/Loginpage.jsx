import React, { useState } from "react"; // 1. Import useState
import { Link } from "react-router-dom";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons"; // 2. Import Eye icons

const Login = () => {
  // 3. Create state for visibility
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center px-4 py-20">
        <section className="w-full max-w-md">
          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-4xl font-black text-gray-900 tracking-tight mb-2">
              Welcome Back
            </h1>
            <p className="text-gray-500 font-medium">
              New to Ethio Store?{" "}
              <Link to="/register" className="text-blue-600 hover:underline">
                Create an account
              </Link>
            </p>
          </div>

          {/* Login Card */}
          <div className="bg-white shadow-xl shadow-gray-200/50 rounded-2xl p-8 border border-gray-100">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              
              {/* Email Field */}
              <div className="space-y-1">
                <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="name@example.com"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-gray-400"
                  required
                />
              </div>

              {/* Password Field with Toggle */}
              <div className="space-y-1">
                <div className="flex justify-between items-center">
                  <label htmlFor="password" className="block text-xs font-bold uppercase tracking-wider text-gray-700">
                    Password
                  </label>
                  <Link to="/forgot" className="text-xs font-semibold text-blue-600 hover:text-blue-800 transition">
                    Forgot Password?
                  </Link>
                </div>
                
                {/* 4. Wrap input in a relative container */}
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"} // 5. Conditional type
                    id="password"
                    placeholder="••••••••"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-gray-400"
                    required
                  />
                  {/* 6. Toggle Button */}
                  <button
                    type="button" // Important: prevents form submission
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gray-900 text-white py-4 rounded-xl font-bold text-sm hover:bg-blue-600 shadow-lg shadow-gray-200 transform transition-all active:scale-[0.98]"
              >
                Sign In
              </button>

              {/* Divider */}
              <div className="relative py-4 flex items-center">
                <div className="flex-grow border-t border-gray-100"></div>
                <span className="flex-shrink mx-4 text-gray-400 text-xs font-bold uppercase tracking-widest">Or continue with</span>
                <div className="flex-grow border-t border-gray-100"></div>
              </div>

              {/* Social Logins */}
              <div className="grid grid-cols-2 gap-4">
                <button className="flex items-center justify-center gap-2 border border-gray-200 py-3 rounded-xl hover:bg-gray-50 transition font-semibold text-sm">
                  <FontAwesomeIcon icon={faGoogle} className="text-red-500" />
                  Google
                </button>
                <button className="flex items-center justify-center gap-2 border border-gray-200 py-3 rounded-xl hover:bg-gray-50 transition font-semibold text-sm">
                  <FontAwesomeIcon icon={faGithub} />
                  Github
                </button>
              </div>
            </form>
          </div>

          {/* Security Note */}
          <p className="text-center text-gray-400 text-xs mt-8 px-6">
            By signing in, you agree to our <b>Terms of Service</b> and <b>Privacy Policy</b>.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Login;