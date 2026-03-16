import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt, faUserPlus, faShoppingCart, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartItems = useSelector((state) => state.handleCart);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => setIsMenuOpen(false), [location]);

  return (
    <nav className="sticky top-0 z-[100] w-full bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-black tracking-tighter hover:opacity-80 transition">
          ETHIO <span className="text-blue-600">STORE</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {["Home", "Product", "About", "Contact"].map((item) => (
            <Link 
              key={item} 
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="text-sm font-semibold text-gray-600 hover:text-blue-600 transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link to="/login" className="text-sm font-semibold px-4 py-2 hover:text-blue-600 transition">
            Login
          </Link>
          <Link to="/register" className="bg-gray-900 text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-gray-800 transition shadow-lg shadow-gray-200">
            Sign Up
          </Link>
          <Link to="/cart" className="relative p-2 text-gray-700 hover:text-blue-600 transition">
            <FontAwesomeIcon icon={faShoppingCart} className="text-lg" />
            {cartItems.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white">
                {cartItems.length}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} className="text-xl" />
        </button>
      </div>

      {/* Mobile Sidebar Overlay */}
      <div className={`fixed inset-0 bg-black/50 md:hidden transition-opacity ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`} onClick={() => setIsMenuOpen(false)} />
      
      {/* Mobile Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-3/4 max-w-sm bg-white z-[101] shadow-2xl transform transition-transform duration-300 md:hidden ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="p-8 flex flex-col gap-6">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Menu</p>
          {["Home", "Products", "About", "Contact"].map((item) => (
            <Link key={item} to={item === "Home" ? "/" : `/${item.toLowerCase()}`} className="text-xl font-bold text-gray-800">
              {item}
            </Link>
          ))}
          <hr className="border-gray-100" />
          <div className="flex flex-col gap-4">
            <Link to="/login" className="flex items-center gap-3 text-lg font-medium"><FontAwesomeIcon icon={faSignInAlt} /> Login</Link>
            <Link to="/cart" className="flex items-center gap-3 text-lg font-medium"><FontAwesomeIcon icon={faShoppingCart} /> Cart ({cartItems.length})</Link>
            <Link to="/register" className="bg-blue-600 text-white text-center py-4 rounded-xl font-bold">Get Started</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;