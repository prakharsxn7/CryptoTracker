import React from "react";
import { MdOutlineStar } from "react-icons/md";
import { MdOutlineStarOutline } from "react-icons/md";
import { FaArrowTrendDown } from "react-icons/fa6";
import { FaArrowTrendUp } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { handleAdd, handleRemove } from "../store/watchlistSlice";

const Card = ({ item, checker }) => {
  const watchlist = useSelector((store) => store.watchlist);
  const dispatch = useDispatch();

  function watchlistAdd() {
    dispatch(handleAdd(item));
  }

  function watchlistRemove() {
    dispatch(handleRemove(item));
  }

  const isPresent = (arr, obj) => arr.some((item) => item.id === obj.id);
  const result = isPresent(watchlist, item);
  
  const priceChange = item.price_change_24h;
  const isPriceUp = priceChange > 0;
  const currentPrice = checker === "top10"
    ? Math.round(item.data.price * 1000000) / 1000000
    : Math.round(item.current_price * 1000000) / 1000000;
  const marketCap = checker === "top10" ? item.data.market_cap : item.market_cap;
  const totalVolume = checker === "top10" ? item.data.total_volume : item.total_volume;

  // Format large numbers with commas
  const formatNumber = (num) => {
    if (!num) return "0";
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div className="relative group">
      {/* Glow effect underneath the card */}
      <div className="absolute inset-0 rounded-2xl bg-gray-700/20 blur-xl group-hover:bg-[#C4FF33]/20 group-hover:blur-2xl transition-all duration-300 opacity-70 group-hover:opacity-100"></div>
      
      {/* Card content with glassmorphism effect */}
      <div className="relative bg-gradient-to-br from-[#101010] to-[#171717] border-gray-800 backdrop-blur-sm group-hover:border-[#C4FF33]/30 rounded-xl border shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden z-10">
        
        {/* Subtle accent glow in corner */}
        <div className="absolute -right-4 -top-4 w-16 h-16 rounded-full bg-gray-600/20 group-hover:bg-[#C4FF33]/20 blur-2xl transition-colors duration-300"></div>
        
        <div className="p-6 relative">
          <div className="flex items-center justify-between mb-4">
            <Link to={`/coin/${item.id}`} className="flex items-center gap-3">
              <div className="w-12 h-12 flex items-center justify-center bg-gray-800/80 backdrop-blur-sm rounded-full overflow-hidden shadow-inner group-hover:bg-gray-800/90 transition-colors duration-300">
                <img
                  src={checker === "top10" ? item.thumb : item.image}
                  alt={`${item.name} logo`}
                  className="w-8 h-8 object-contain"
                />
              </div>
              <div>
                <h2 className="text-lg font-bold text-white group-hover:text-[#C4FF33] transition-colors duration-300">{item.name}</h2>
                <p className="text-sm font-medium text-gray-400 uppercase">{item.symbol}</p>
              </div>
            </Link>
            
            <button 
              onClick={result ? watchlistRemove : watchlistAdd}
              className="p-2 rounded-full hover:bg-gray-800/70 transition-colors backdrop-blur-sm"
            >
              {result ? (
                <MdOutlineStar className="text-2xl text-yellow-500" />
              ) : (
                <MdOutlineStarOutline className="text-2xl text-gray-500 group-hover:text-gray-300 transition-colors duration-300" />
              )}
            </button>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-white group-hover:text-[#C4FF33] transition-colors duration-300">
                ${currentPrice}
              </span>
              
              <div className="flex items-center gap-2">
                {!checker && priceChange && (
                  <span className={`text-sm font-medium ${isPriceUp ? 'text-green-500' : 'text-red-500'}`}>
                    {isPriceUp ? '+' : ''}{priceChange.toFixed(2)}
                  </span>
                )}
                
                <div className={`w-8 h-8 flex items-center justify-center rounded-full shadow-inner ${
                  isPriceUp 
                    ? 'bg-green-900/70 text-green-400' 
                    : 'bg-red-900/70 text-red-400'
                } backdrop-blur-sm`}>
                  {isPriceUp ? <FaArrowTrendUp /> : <FaArrowTrendDown />}
                </div>
              </div>
            </div>
            
            <div className="space-y-1 mt-2 text-sm text-gray-400">
              <div className="flex justify-between">
                <span>Market Cap:</span>
                <span className="font-medium text-gray-300">${formatNumber(marketCap)}</span>
              </div>
              <div className="flex justify-between">
                <span>Volume (24h):</span>
                <span className="font-medium text-gray-300">${formatNumber(totalVolume)}</span>
              </div>
            </div>
            
            <Link 
              to={`/coin/${item.id}`}
              className="mt-4 flex justify-center items-center py-2.5 w-full bg-gradient-to-r from-gray-700 to-gray-800 group-hover:from-[#C4FF33] group-hover:to-[#DCFE56] text-white group-hover:text-black rounded-full text-sm font-medium shadow-md transition-all hover:shadow-lg hover:scale-[1.02] duration-300"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
