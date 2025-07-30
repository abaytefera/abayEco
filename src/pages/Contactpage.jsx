import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
const ContactPage = () => {
  return (
    <>
      <Navbar />
      <section className="px-4 py-10 max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">Contact Us</h1>
        <p className="text-center text-gray-600 mb-8">
          Have questions, suggestions, or just want to say hello? We’d love to hear from you!
        </p>

        <form className="bg-white shadow-md rounded-xl p-6 space-y-6">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-700"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="name@example.com"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-700"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              placeholder="Enter your message..."
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-700"
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-gray-800 text-white px-6 py-2 rounded-md hover:bg-gray-700 transition"
              disabled
            >
              Send
            </button>
          </div>
        </form>
      </section>
      <Footer />
    </>
  );
};

export default ContactPage;
