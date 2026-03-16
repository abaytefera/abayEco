import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-xl font-black mb-4">ETHIO STORE</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Premium ecommerce experience tailored for the Ethiopian market. Quality products, delivered fast.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Shop</h4>
            <ul className="text-gray-600 text-sm space-y-2">
              <li><a href="/products" className="hover:text-blue-600">All Products</a></li>
              <li><a href="/featured" className="hover:text-blue-600">Featured</a></li>
              <li><a href="/offers" className="hover:text-blue-600">Special Offers</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="text-gray-600 text-sm space-y-2">
              <li><a href="/about" className="hover:text-blue-600">About Us</a></li>
              <li><a href="/contact" className="hover:text-blue-600">Contact Support</a></li>
              <li><a href="/terms" className="hover:text-blue-600">Terms of Service</a></li>
            </ul>
          </div>

          {/* Newsletter/Social */}
          <div>
            <h4 className="font-bold mb-4">Stay Connected</h4>
            <div className="flex gap-4 text-xl text-gray-400">
              <a href="#" className="hover:text-gray-900 transition"><FontAwesomeIcon icon={faGithub} /></a>
              <a href="#" className="hover:text-blue-500 transition"><FontAwesomeIcon icon={faTwitter} /></a>
              <a href="#" className="hover:text-blue-700 transition"><FontAwesomeIcon icon={faLinkedin} /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-xs">
            © 2025 Abay Tefera. All rights reserved. Built with Passion.
          </p>
          <div className="flex gap-6 text-xs text-gray-400">
            <span>Privacy Policy</span>
            <span>Cookie Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;