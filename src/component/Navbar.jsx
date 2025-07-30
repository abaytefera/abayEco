import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignInAlt,
  faUserPlus,
  faShoppingCart,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartItems = useSelector((state) => state.handleCart);

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "Products", to: "/product" },
    { name: "About", to: "/about" },
    { name: "Contact", to: "/contact" },
  ];

  const authLinks = [
    {
      to: "/login",
      label: "Login",
      icon: faSignInAlt,
    },
    {
      to: "/register",
      label: "Register",
      icon: faUserPlus,
    },
    {
      to: "/cart",
      label: `Cart (${cartItems.length})`,
      icon: faShoppingCart,
    },
  ];
// 
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 w-full">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold italic">
          Ethio <span className="text-blue-600">Ecommerce</span>
        </Link>

        {/* Hamburger for mobile */}
        <button
          className="text-2xl sm:hidden focus:outline-none"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>

        {/* Desktop Nav */}
        <ul className="hidden sm:flex items-center gap-6 text-sm font-medium text-gray-700">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link to={link.to} className="hover:text-blue-600 transition">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          {authLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="flex items-center gap-2 border border-gray-700 text-gray-800 hover:bg-gray-800 hover:text-white px-4 py-1 rounded-full text-sm transition"
            >
              <FontAwesomeIcon icon={link.icon} />
              {link.label}
              {/* link.label */}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`sm:hidden flex flex-col gap-3 px-4 pb-4 bg-white transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-[600px] pt-4 opacity-100 visible" : "max-h-0 overflow-hidden opacity-0 invisible"
        }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            onClick={() => setIsMenuOpen(false)}
            className="block text-gray-800 text-sm font-medium hover:text-blue-600 transition"
          >
            {link.name}
          </Link>
        ))}
        <div className="flex flex-col gap-2 mt-2">
          {authLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center gap-2 border border-gray-700 text-gray-800 hover:bg-gray-800 hover:text-white px-4 py-2 rounded-full text-sm transition"
            >
              <FontAwesomeIcon icon={link.icon} />
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
