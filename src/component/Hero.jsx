import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <section className="relative h-[85vh] w-full overflow-hidden bg-gray-900">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0">
        <img
          src="image.png"
          alt="Modern Fashion Collection"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 hover:scale-100"
        />
        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="relative container mx-auto h-full flex items-center px-6 md:px-12">
        <div className="max-w-2xl text-white space-y-6">
          
          {/* Subtle Tagline */}
          <span className="inline-block text-blue-400 font-bold tracking-[0.2em] text-xs uppercase animate-fade-in">
            New Arrival 2025
          </span>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tighter">
            Elevate Your <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              Everyday Style
            </span>
          </h1>

          {/* Description */}
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-lg font-light">
            Experience the fusion of high-end fashion and ultimate comfort. 
            Curated pieces designed for those who lead, not follow.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              to="/product"
              className="group flex items-center gap-3 bg-white text-black px-8 py-4 rounded-xl font-bold text-sm transition-all hover:bg-blue-600 hover:text-white shadow-xl shadow-white/10"
            >
              Shop Collection
              <FontAwesomeIcon 
                icon={faArrowRight} 
                className="group-hover:translate-x-1 transition-transform" 
              />
            </Link>

            <Link
              to="/about"
              className="px-8 py-4 rounded-xl font-bold text-sm border border-white/30 text-white backdrop-blur-sm hover:bg-white/10 transition-all"
            >
              Our Story
            </Link>
          </div>

          {/* Trust Badges / Mini Stats */}
          <div className="pt-12 flex gap-8 border-t border-white/10 mt-12 hidden sm:flex">
            <div>
              <p className="text-2xl font-bold">15k+</p>
              <p className="text-gray-400 text-xs uppercase tracking-widest">Happy Clients</p>
            </div>
            <div>
              <p className="text-2xl font-bold">500+</p>
              <p className="text-gray-400 text-xs uppercase tracking-widest">Global Brands</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;