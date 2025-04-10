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
              <div className="w-10 h-10 bg-gradient-to-br from-[#101010] to-[#151515] border-gray-800 rounded-full flex items-center justify-center border mr-3">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11 7H13V9H11V7ZM11 11H13V17H11V11Z" fill="#C4FF33"/>
                </svg>
              </div>
              <span className="text-xl font-bold text-white">Crypto<span className="text-[#C4FF33]">Tracker</span></span>
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
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
