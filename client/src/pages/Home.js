import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Home = function () {
  const [trendingCoins, setTrendingCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const user = useSelector((store) => store.user);

  useEffect(() => {
    fetchTrendingCoins();
  }, []);

  const fetchTrendingCoins = async () => {
    try {
      setIsLoading(true);
      const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1');
      const data = await response.json();
      setTrendingCoins(data);
    } catch (error) {
      console.error("Error fetching trending coins:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0A0A0A] to-[#101010] h-screen flex items-center overflow-hidden">
        {/* Main background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] to-[#121212] backdrop-blur-sm"></div>
        
        {/* Left side gradient blur */}
        <div className="absolute left-0 top-0 w-1/2 h-full bg-gradient-to-r from-[#1F2937]/20 to-transparent opacity-70 backdrop-blur-3xl"></div>
        
        {/* Right side gradient - lime green */}
        <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-[#C4FF33]/10 to-transparent opacity-40"></div>
        
        {/* Central blur effect */}
        <div className="absolute right-1/3 top-1/4 w-[500px] h-[500px] rounded-full bg-[#C4FF33]/5 filter blur-[120px]"></div>
        
        {/* Star/sparkle accent element */}
        <div className="absolute left-1/4 top-1/3 w-6 h-6 z-10">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L14.5 9.5H22L16 14L18.5 21.5L12 17L5.5 21.5L8 14L2 9.5H9.5L12 2Z" fill="#C4FF33" />
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight uppercase">
                Discover the <br />
                <span className="text-[#C4FF33]">next big thing</span> <br />
                in crypto before <br />
                anyone else
                </h1>
              
              <div className="mt-10 flex items-center space-x-6">
                <Link to={user === "logged in" ? "/watchlist" : "/signup"}>
                  <button className="px-8 py-4 bg-[#C4FF33] rounded-full font-bold text-black transition-transform hover:scale-105">
                    Start Exploring
                  </button>
                </Link>
                <Link to="/top10" className="text-gray-300 hover:text-white transition-colors font-medium">
                  View Top 10 →
                </Link>
              </div>
            </div>
            
            <div className="relative">
              {/* Glow behind laptop */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#232323] to-[#1A1A1A] shadow-xl shadow-black/20 rounded-xl p-2"></div>
              
              {/* Laptop mockup with app screenshot */}
              <div className="relative transform perspective-1000 rotate-y-5 rotate-x-10 z-10">
                <div className="w-full bg-gradient-to-br from-[#232323] to-[#1A1A1A] shadow-xl shadow-black/20 rounded-xl p-2 shadow-2xl">
                  <div className="bg-gradient-to-br from-[#0A0A0A] to-[#101010] backdrop-blur-sm rounded-lg overflow-hidden">
                    {/* UI mockup */}
                    <div className="p-4">
                      <div className="flex items-center space-x-2 mb-4">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      
                      <div className="flex items-center justify-between py-3 border-b border-gray-800">
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
                          <div className="text-white font-medium">CryptoTracker</div>
                        </div>
                        <div className="flex space-x-3">
                          <div className="w-6 h-6 bg-gray-700 rounded"></div>
                          <div className="w-6 h-6 bg-gray-700 rounded"></div>
                        </div>
                      </div>
                      
                      <div className="mt-4 grid grid-cols-2 gap-4">
                        <div className="bg-gradient-to-br from-gray-800 to-gray-900 backdrop-blur-sm p-3 rounded-lg">
                          <div className="text-[#C4FF33] text-sm font-medium">Bitcoin</div>
                          <div className="text-white text-lg font-bold mt-1">$45,231.04</div>
                          <div className="text-green-500 text-xs mt-1">+2.4%</div>
                        </div>
                        <div className="bg-gradient-to-br from-gray-800 to-gray-900 backdrop-blur-sm p-3 rounded-lg">
                          <div className="text-[#C4FF33] text-sm font-bold">Ethereum</div>
                          <div className="text-white text-lg font-bold mt-1">$3,180.79</div>
                          <div className="text-red-500 text-xs mt-1">-0.8%</div>
                        </div>
                      </div>
                      
                      <div className="mt-4 bg-gradient-to-br from-gray-800 to-gray-900 backdrop-blur-sm rounded-lg p-4">
                        <div className="text-gray-400 text-xs uppercase font-medium mb-2">Trending Coins</div>
                        {isLoading ? (
                          <div className="space-y-3">
                            {[...Array(3)].map((_, i) => (
                              <div key={i} className="flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                  <div className="w-6 h-6 bg-gray-700 rounded-full"></div>
                                  <div className="h-3 w-16 bg-gray-700 rounded"></div>
                                </div>
                                <div className="h-3 w-12 bg-gray-700 rounded"></div>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div className="space-y-3">
                            {trendingCoins.slice(0, 3).map((coin) => (
                              <div key={coin.id} className="flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                  <img 
                                    src={coin.image} 
                                    alt={`${coin.name} logo`}
                                    className="w-6 h-6 rounded-full"
                                  />
                                  <div className="text-white">{coin.symbol.toUpperCase()}</div>
                                </div>
                                <div className={`${coin.price_change_percentage_24h > 0 ? 'text-green-500' : 'text-red-500'}`}>
                                  {coin.price_change_percentage_24h > 0 ? '+' : ''}
                                  {coin.price_change_percentage_24h?.toFixed(2)}%
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Laptop bottom part */}
                <div className="bg-gradient-to-b from-[#333333] to-[#1E1E1E] h-4 rounded-b-xl mx-auto w-11/12 shadow-lg"></div>
              </div>
            </div>
              </div>
            </div>
          </section>
      
      {/* Features Section */}
      <section className="bg-gradient-to-br from-[#050505] to-[#0A0A0A] backdrop-blur-sm py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white">
              Supercharged <span className="text-[#C4FF33]">Crypto Tools</span>
              </h2>
            <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
              Professional-grade crypto tracking and analysis tools for every investor
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-[#101010] to-[#171717] border-gray-800 backdrop-blur-sm hover:shadow-xl hover:shadow-black/10 border p-8 rounded-xl shadow-sm transition-all duration-300">
              <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-[#181818] to-[#202020] backdrop-blur-sm rounded-lg mb-6">
                <svg className="w-6 h-6 text-[#C4FF33]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 16L10.879 13.121C11.2695 12.7305 11.8954 12.7305 12.2858 13.121L15.1642 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 9L10.879 6.12103C11.2695 5.73051 11.8954 5.73051 12.2858 6.12103L16 9.83521" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5C3.89543 3 3 3.89543 3 5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Real-time Tracking</h3>
              <p className="text-gray-400">
                Get up-to-the-minute price updates and market movements for thousands of cryptocurrencies.
                    </p>
                  </div>
            
            <div className="bg-gradient-to-br from-[#101010] to-[#171717] border-gray-800 backdrop-blur-sm hover:shadow-xl hover:shadow-black/10 border p-8 rounded-xl shadow-sm transition-all duration-300">
              <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-[#181818] to-[#202020] backdrop-blur-sm rounded-lg mb-6">
                <svg className="w-6 h-6 text-[#C4FF33]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 12V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M19.7942 7.5L4.20575 16.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3 7.5L21 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                </div>
              <h3 className="text-xl font-bold mb-3 text-white">Custom Watchlists</h3>
              <p className="text-gray-400">
                Create personalized lists of your favorite coins to monitor their performance.
                    </p>
                  </div>
            
            <div className="bg-gradient-to-br from-[#101010] to-[#171717] border-gray-800 backdrop-blur-sm hover:shadow-xl hover:shadow-black/10 border p-8 rounded-xl shadow-sm transition-all duration-300">
              <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-[#181818] to-[#202020] backdrop-blur-sm rounded-lg mb-6">
                <svg className="w-6 h-6 text-[#C4FF33]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 8V16M12 11V16M8 14V16M6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                </div>
              <h3 className="text-xl font-bold mb-3 text-white">Market Insights</h3>
              <p className="text-gray-400">
                Access in-depth analytics and historical data to make informed investment decisions.
                    </p>
                  </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[#030303] to-[#080808] backdrop-blur-sm text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative bg-gradient-to-br from-[#0A0A0A] to-[#101010] border-gray-800 backdrop-blur-sm rounded-3xl p-16 overflow-hidden shadow-lg">
            {/* Glow effect */}
            <div className="absolute -right-24 top-0 w-64 h-64 bg-[#C4FF33]/10 rounded-full filter blur-[80px]"></div>
            
            {/* Star/sparkle accent */}
            <div className="absolute right-16 top-16 w-8 h-8">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L14.5 9.5H22L16 14L18.5 21.5L12 17L5.5 21.5L8 14L2 9.5H9.5L12 2Z" fill="#C4FF33" />
              </svg>
            </div>
            
            <div className="max-w-2xl">
              <h2 className="text-5xl font-bold mb-6">
                Invest <span className="text-[#C4FF33]">Before</span> The Hype
              </h2>
              <p className="text-xl text-gray-300 mb-10">
                Get early access to successful crypto projects, handpicked by our team of experts.
              </p>
              <Link to={user === "logged in" ? "/top10" : "/signup"}>
                <button className="px-8 py-4 bg-[#C4FF33] text-black font-bold rounded-full text-lg transition-transform hover:scale-105">
                  Get Started Now
                </button>
              </Link>
                </div>
              </div>
            </div>
          </section>
    </>
  );
};

export default Home;
