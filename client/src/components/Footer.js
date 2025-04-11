import React from "react";
import { Link } from "react-router-dom";
import { FaTwitter, FaDiscord, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#050505] to-[#0A0A0A] text-white border-gray-800 backdrop-blur-sm py-12 border-t">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center mb-4">
              <div className="w-40 h-15 mr-2 flex items-center justify-center ">
              <img src="/mlogo1.png" alt="logo" className="w-full h-full object-cover" />
            </div>
            </Link>
            <p className="mb-4 text-gray-400">
              Your reliable companion for tracking cryptocurrency prices, trends, and market movements in real-time.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaDiscord size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaGithub size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/top10" className="text-gray-400 hover:text-white transition-colors">
                  Top 10
                </Link>
              </li>
              <li>
                <Link to="/trending" className="text-gray-400 hover:text-white transition-colors">
                  Trending
                </Link>
              </li>
              <li>
                <Link to="/watchlist" className="text-gray-400 hover:text-white transition-colors">
                  Watchlist
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  API Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Crypto Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  News
                </a>
              </li>
            </ul>
          </div>
          
          {/* Stay Updated */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Stay Updated</h3>
            <p className="mb-4 text-gray-400">
              Subscribe to our newsletter to get the latest crypto updates
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="rounded-l-lg p-2 w-full bg-gradient-to-br from-[#101010] to-[#151515] border-gray-800 text-gray-300 focus:ring-[#C4FF33]/50 border focus:outline-none focus:ring-2"
              />
              <button 
                className="bg-gradient-to-r from-[#C4FF33] to-[#DCFE56] text-black font-medium rounded-r-lg px-4 transition-all hover:shadow-lg"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="pt-8 mt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} CryptoTracker. All rights reserved.
            <br/>Designed and Developed with ♥ by Prakhar Saxena
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
