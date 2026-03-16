import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-gray-200 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* Brand Section - High Visibility */}
          <div className="md:col-span-4">
            <h3 className="text-2xl font-black mb-6 tracking-tighter text-gray-900">
              ETHIO <span className="text-blue-600">STORE.</span>
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed max-w-sm mb-6">
              Empowering the Ethiopian digital market with premium products and seamless logistics. We bridge the gap between quality and accessibility.
            </p>
            <div className="flex gap-5 text-xl">
              <a href="#" aria-label="Github" className="text-gray-900 hover:text-blue-600 transition-colors">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-900 hover:text-blue-400 transition-colors">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-gray-900 hover:text-blue-700 transition-colors">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>

          {/* Navigation Links - Improved Contrast */}
          <div className="md:col-span-2">
            <h4 className="text-sm font-black uppercase tracking-widest text-gray-900 mb-6">Shop</h4>
            <ul className="text-gray-700 text-sm space-y-4 font-medium">
              <li><a href="/products" className="hover:text-blue-600 transition-colors">All Products</a></li>
              <li><a href="/featured" className="hover:text-blue-600 transition-colors">New Arrivals</a></li>
              <li><a href="/offers" className="hover:text-blue-600 transition-colors">Special Offers</a></li>
              <li><a href="/categories" className="hover:text-blue-600 transition-colors">Categories</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-sm font-black uppercase tracking-widest text-gray-900 mb-6">Company</h4>
            <ul className="text-gray-700 text-sm space-y-4 font-medium">
              <li><a href="/about" className="hover:text-blue-600 transition-colors">About Us</a></li>
              <li><a href="/contact" className="hover:text-blue-600 transition-colors">Contact Support</a></li>
              <li><a href="/careers" className="hover:text-blue-600 transition-colors">Careers</a></li>
              <li><a href="/press" className="hover:text-blue-600 transition-colors">Press Kit</a></li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="md:col-span-4">
            <h4 className="text-sm font-black uppercase tracking-widest text-gray-900 mb-6">Join our Newsletter</h4>
            <p className="text-gray-600 text-xs mb-4">Get the latest trends and deals delivered to your inbox.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="email@example.com" 
                className="flex-grow bg-gray-100 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 transition-all outline-none text-gray-900"
              />
              <button className="bg-gray-900 text-white px-5 py-3 rounded-xl font-bold text-xs hover:bg-blue-600 transition-all">
                JOIN
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-100 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-8">
            <p className="text-gray-900 text-[11px] font-bold uppercase tracking-tight">
              © 2026 Abay Tefera.
            </p>
            <div className="flex gap-6 text-[11px] font-bold text-gray-500 uppercase tracking-tighter">
              <a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-gray-900 transition-colors">Terms of Use</a>
              <a href="#" className="hover:text-gray-900 transition-colors">Cookie Settings</a>
            </div>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-gray-900 hover:text-blue-600 transition-all"
          >
            Back to top
            <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-blue-600 group-hover:-translate-y-1 transition-all">
              <FontAwesomeIcon icon={faChevronUp} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;