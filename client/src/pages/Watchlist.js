import React from "react";
import { useSelector } from "react-redux";
import Cards from "../components/Cards";
import { Link } from "react-router-dom";

const Watchlist = () => {
  const watchlistdata = useSelector((store) => store.watchlist);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#050505] to-[#0A0A0A] backdrop-blur-sm">
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-6 text-white">
          Your Watchlist
        </h1>
        
        {watchlistdata.length === 0 ? (
          <div className="p-8 text-center bg-gradient-to-br from-[#0A0A0A] to-[#111111] border border-gray-800 backdrop-blur-sm text-gray-300 rounded-xl shadow-md">
            <div className="flex justify-center mb-4">
              <svg className="w-16 h-16 text-gray-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z" clipRule="evenodd"></path>
              </svg>
            </div>
            <h2 className="text-xl font-bold mb-2 text-white">
              No coins in your watchlist
            </h2>
            <p className="mb-6">
              Add cryptocurrencies to your watchlist to track their performance
            </p>
            <Link to="/trending">
              <button className="px-6 py-3 bg-gradient-to-r from-[#C4FF33] to-[#DCFE56] text-black font-medium rounded-full shadow-md transition-all hover:shadow-lg hover:scale-105">
                Explore Trending Coins
              </button>
            </Link>
          </div>
        ) : (
          <div>
            <p className="mb-8 max-w-3xl text-gray-300">
              Your personalized collection of cryptocurrencies. Track performance and stay updated on your favorites.
            </p>
            <Cards data={watchlistdata} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Watchlist;
