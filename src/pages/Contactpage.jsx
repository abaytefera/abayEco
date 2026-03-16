import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMapMarkerAlt, faPhone, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center px-4 py-20">
        <section className="max-w-6xl w-full grid md:grid-cols-2 gap-0 bg-white shadow-2xl rounded-[2.5rem] overflow-hidden border border-gray-100">
          
          {/* Left Side: Contact Info & Branding */}
          <div className="bg-gray-900 p-10 md:p-16 text-white flex flex-col justify-between relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
            
            <div className="relative z-10">
              <span className="text-blue-400 font-black uppercase tracking-widest text-xs">Reach Out</span>
              <h1 className="text-5xl font-black mt-4 mb-6 tracking-tight">Let's start a <br/>conversation.</h1>
              <p className="text-gray-400 max-w-sm leading-relaxed mb-12">
                Whether you have a question about our collections, shipping, or just want to share your feedback, our team is here to help.
              </p>

              <div className="space-y-8">
                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-blue-600 transition-colors">
                    <FontAwesomeIcon icon={faEnvelope} className="text-blue-400 group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-black text-gray-500 tracking-tighter">Email Us</p>
                    <p className="font-bold">abaytefera29@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-blue-600 transition-colors">
                    <FontAwesomeIcon icon={faPhone} className="text-blue-400 group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-black text-gray-500 tracking-tighter">Call Us</p>
                    <p className="font-bold">+251 984850998</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-blue-600 transition-colors">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="text-blue-400 group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-black text-gray-500 tracking-tighter">Visit Us</p>
                    <p className="font-bold">Addis Ababa, Ethiopia</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 text-gray-500 text-xs font-medium">
              © 2026 Ethio Store. All rights reserved.
            </div>
          </div>

          {/* Right Side: The Form */}
          <div className="p-10 md:p-16 flex flex-col justify-center">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Your Name</label>
                  <input
                    type="text"
                    placeholder="Abebe Bikila"
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all placeholder:text-gray-300"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Email Address</label>
                  <input
                    type="email"
                    placeholder="name@example.com"
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all placeholder:text-gray-300"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Subject</label>
                <select className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all text-gray-600">
                  <option>Order Inquiry</option>
                  <option>Return/Exchange</option>
                  <option>Wholesale</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Message</label>
                <textarea
                  rows={4}
                  placeholder="How can we help you?"
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all placeholder:text-gray-300 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gray-900 text-white py-5 rounded-2xl font-black text-sm tracking-widest uppercase hover:bg-blue-600 shadow-xl shadow-gray-200 transition-all active:scale-[0.98] flex items-center justify-center gap-3"
              >
                Send Message
                <FontAwesomeIcon icon={faPaperPlane} className="text-xs" />
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;