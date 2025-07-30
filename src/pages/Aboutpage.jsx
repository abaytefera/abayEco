import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const categories = [
  {
    title: "Men's Clothing",
    img: "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Women's Clothing",
    img: "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Jewelry",
    img: "https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Electronics",
    img: "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

const AboutPage = () => {
  return (
    <>
      <Navbar />

      <section className="px-4 py-10 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4 text-gray-800">About Us</h1>
        <p className="text-gray-600 text-lg text-center max-w-3xl mx-auto mb-8 leading-relaxed">
          We’re passionate about delivering quality products that bring value to your life.
          Our mission is to blend style, affordability, and convenience in one seamless shopping experience.
        </p>
        <div className="border-t border-gray-200 my-8"></div>

        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Our Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow hover:shadow-lg transition duration-300">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <div className="p-4 text-center">
                <h5 className="text-lg font-semibold text-gray-700">{item.title}</h5>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AboutPage;
