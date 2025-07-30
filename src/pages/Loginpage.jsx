import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const Login = () => {
  return (
    <>
      <Navbar />
      <section className="max-w-md mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">Login</h1>
        <p className="text-center text-gray-600 mb-6">
          Welcome back! Please enter your credentials to access your account.
        </p>

        <form className="bg-white shadow-md rounded-xl p-6 space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="name@example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
            />
          </div>

          <div className="text-sm text-gray-600">
            New here?{" "}
            <Link to="/register" className="text-blue-600 hover:underline">
              Create an account
            </Link>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="w-full bg-gray-800 text-white py-2 rounded-md hover:bg-gray-700 transition"
              disabled
            >
              Login
            </button>
          </div>
        </form>
      </section>
      <Footer />
    </>
  );
};

export default Login;
