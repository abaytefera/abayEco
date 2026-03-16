import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldHeart, faTruckFast, faHandHoldingHeart, faTag } from "@fortawesome/free-solid-svg-icons";

const categories = [
  {
    title: "Men's Clothing",
    img: "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600",
    count: "120+ Items",
  },
  {
    title: "Women's Clothing",
    img: "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600",
    count: "250+ Items",
  },
  {
    title: "Jewelry",
    img: "https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=600",
    count: "80+ Items",
  },
  {
    title: "Electronics",
    img: "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600",
    count: "40+ Items",
  },
];

const values = [
  { icon: faShieldHeart, title: "Quality First", desc: "Every product is hand-picked for durability and style." },
  { icon: faTruckFast, title: "Swift Delivery", desc: "Fast shipping across Ethiopia, straight to your door." },
  { icon: faHandHoldingHeart, title: "Ethical Sourcing", desc: "Supporting local artisans and responsible makers." },
  { icon: faTag, title: "Best Prices", desc: "Premium quality shouldn't mean a premium price tag." },
];

const AboutPage = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-24 bg-gray-900 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
            <span className="text-blue-400 font-black uppercase tracking-[0.3em] text-xs">Our Story</span>
            <h1 className="text-5xl md:text-7xl font-black text-white mt-4 mb-8 tracking-tighter">
              Defining the future of <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Ethio Shopping.</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
              We’re more than a store. We are a community-focused platform dedicated to bringing the world's best trends to Ethiopia.
            </p>
          </div>
        </section>

        {/* Brand Values Grid */}
        <section className="py-20 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val, idx) => (
              <div key={idx} className="group p-8 bg-gray-50 rounded-[2rem] border border-gray-100 transition-all hover:bg-white hover:shadow-2xl hover:shadow-gray-200">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:bg-blue-600 transition-colors">
                  <FontAwesomeIcon icon={val.icon} className="text-blue-600 group-hover:text-white text-xl" />
                </div>
                <h3 className="text-lg font-black text-gray-900 mb-2">{val.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
              <div>
                <h2 className="text-4xl font-black text-gray-900 tracking-tight">Shop by Category</h2>
                <p className="text-gray-500 mt-2">Explore our carefully curated collections.</p>
              </div>
              <button className="text-sm font-black uppercase tracking-widest text-blue-600 border-b-2 border-blue-600 pb-1">View All</button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {categories.map((item, index) => (
                <div key={index} className="group relative h-[400px] rounded-[2.5rem] overflow-hidden cursor-pointer shadow-xl shadow-gray-200">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 text-white">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-400 mb-2">{item.count}</p>
                    <h5 className="text-2xl font-black tracking-tight">{item.title}</h5>
                    <div className="h-1 w-0 bg-blue-500 group-hover:w-full transition-all duration-500 mt-4 rounded-full"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 text-center">
            <h2 className="text-3xl font-black mb-8">Ready to elevate your lifestyle?</h2>
            <button className="bg-gray-900 text-white px-12 py-5 rounded-2xl font-black text-sm tracking-widest uppercase hover:bg-blue-600 transition-all shadow-2xl shadow-gray-200">
                Start Shopping Now
            </button>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;