import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="relative h-[85vh] w-full overflow-hidden bg-black ">
      {/* Background Image */}
      <img
        src="image.png"
        alt="Season Banner"
        className="w-full  h-full object-cover opacity-60"
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 text-white">
        <h1 className="text-4xl md:text-6xl font-light mb-4 tracking-wide">
          Shop
        </h1>
        <p className="text-base md:text-lg max-w-xl mb-6">
          Discover the latest trends and explore our wide selection of fashion products
          for every season. Quality meets comfort.
        </p>
        <Link
          to="/product"
          className="bg-white text-black px-6 py-3 rounded-full font-medium text-sm hover:bg-black hover:text-white border border-white transition-all duration-300"
        >
          Shop Now
        </Link>
      </div>
    </section>
  );
};

export default Home;
