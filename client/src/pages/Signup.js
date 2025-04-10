import React from "react";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { setuser } from "../store/userSlice";
import { useTheme } from "../components/ThemeProvider";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { isDarkMode } = useTheme();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulating signup process
    setTimeout(() => {
      if (name && email && password) {
        dispatch(setuser("logged in"));
        navigate("/trending");
        toast.success("Account created successfully! Please login.");
      } else {
        toast.error("Please fill all fields");
      }
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className={`${isDarkMode ? 'bg-[#080808] text-white' : 'bg-white text-gray-900'} min-h-[80vh] flex items-center`}>
      <Toaster position="top-center" />
      <div className="max-w-7xl mx-auto px-6 py-12 w-full">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 pr-0 md:pr-16 mb-10 md:mb-0">
            <div className="relative">
              <div className="absolute -inset-4 bg-[#C4FF33] rounded-3xl -z-10 transform rotate-3"></div>
              <div className={`${isDarkMode ? 'bg-[#101010]' : 'bg-white'} p-8 rounded-2xl shadow-sm`}>
                <h1 className={`text-3xl md:text-4xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Join CryptoTracker</h1>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-8`}>
                  Create an account to access powerful crypto tracking tools, personalized insights, and more.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 flex items-center justify-center ${isDarkMode ? 'bg-blue-900' : 'bg-blue-100'} rounded-full`}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 16L10.879 13.121C11.2695 12.7305 11.8954 12.7305 12.2858 13.121L15.1642 16" stroke={isDarkMode ? "#60A5FA" : "#2563EB"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M8 9L10.879 6.12103C11.2695 5.73051 11.8954 5.73051 12.2858 6.12103L16 9.83521" stroke={isDarkMode ? "#60A5FA" : "#2563EB"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5C3.89543 3 3 3.89543 3 5Z" stroke={isDarkMode ? "#60A5FA" : "#2563EB"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Custom Watchlists</h3>
                      <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Track your favorite cryptocurrencies</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 flex items-center justify-center ${isDarkMode ? 'bg-purple-900' : 'bg-purple-100'} rounded-full`}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 12V3" stroke={isDarkMode ? "#A78BFA" : "#8B5CF6"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M19.7942 7.5L4.20575 16.5" stroke={isDarkMode ? "#A78BFA" : "#8B5CF6"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M3 7.5L21 7.5" stroke={isDarkMode ? "#A78BFA" : "#8B5CF6"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke={isDarkMode ? "#A78BFA" : "#8B5CF6"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Price Alerts</h3>
                      <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Get notified of market movements</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <div className={`max-w-md mx-auto ${isDarkMode ? 'bg-[#101010] border-gray-800' : 'bg-white border-gray-100'} p-8 rounded-xl border`}>
              <div className="mb-8">
                <h2 className={`text-2xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Create an account</h2>
                <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-sm`}>Fill in your details to get started</p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-1`}>
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={`w-full px-4 py-3 rounded-lg ${isDarkMode 
                      ? 'bg-[#181818] border-gray-700 text-white focus:ring-[#C4FF33]' 
                      : 'bg-white border-gray-300 focus:ring-neon-lime'} 
                      border focus:ring-2 focus:border-transparent outline-none transition-colors`}
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-1`}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`w-full px-4 py-3 rounded-lg ${isDarkMode 
                      ? 'bg-[#181818] border-gray-700 text-white focus:ring-[#C4FF33]' 
                      : 'bg-white border-gray-300 focus:ring-neon-lime'} 
                      border focus:ring-2 focus:border-transparent outline-none transition-colors`}
                    placeholder="Enter your email"
                  />
                </div>
                
                <div>
                  <label htmlFor="password" className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-1`}>
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={`w-full px-4 py-3 rounded-lg ${isDarkMode 
                      ? 'bg-[#181818] border-gray-700 text-white focus:ring-[#C4FF33]' 
                      : 'bg-white border-gray-300 focus:ring-neon-lime'} 
                      border focus:ring-2 focus:border-transparent outline-none transition-colors`}
                    placeholder="Create a password"
                  />
                </div>
                
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`w-full bg-[#C4FF33] text-black font-medium py-3 px-4 rounded-lg transition-all ${
                      isLoading ? "opacity-70 cursor-not-allowed" : "hover:scale-[1.03] active:scale-[0.97]"
                    }`}
                  >
                    {isLoading ? "Creating account..." : "Create Account"}
                  </button>
                </div>
              </form>
              
              <div className="mt-8 text-center">
                <span className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-sm`}>Already have an account?</span>{" "}
                <Link to="/login" className={`${isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'} text-sm font-medium`}>
                  Log in
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
