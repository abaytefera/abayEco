import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-center py-6 mt-12">
      <div className="flex flex-col items-center gap-3 text-lg text-gray-800">
        <p>
         
      Website Design & Development © 2025 Abay Tefera
          
        </p>
        <a
          
          target="_blank"
          rel="noreferrer"
          className="text-gray-800 text-xl hover:text-black transition"
        >
          <i className="fa fa-github" aria-hidden="true"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
