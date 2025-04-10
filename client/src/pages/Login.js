import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setuser } from "../store/userSlice";
import { useTheme } from "../components/ThemeProvider";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const { isDarkMode } = useTheme();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulating authentication
    setTimeout(() => {
      if (email && password) {
        // Check if any email and password is entered
        dispatch(setuser("logged in"));
        navigate("/");
        toast.success("Login successful!");
      } else {
        toast.error("Please enter email and password");
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
                <h1 className={`text-3xl md:text-4xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Welcome back</h1>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-8`}>
                  Log in to access your portfolio, watchlist, and personalized crypto insights.
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
                      <h3 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Real-time Tracking</h3>
                      <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Get instant price updates and alerts</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 flex items-center justify-center ${isDarkMode ? 'bg-purple-900' : 'bg-purple-100'} rounded-full`}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 7H5C3.89543 7 3 7.89543 3 9V18C3 19.1046 3.89543 20 5 20H19C20.1046 20 21 19.1046 21 18V9C21 7.89543 20.1046 7 19 7H16M15 11L12 14M12 14L9 11M12 14V4" stroke={isDarkMode ? "#A78BFA" : "#8B5CF6"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Portfolio Management</h3>
                      <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Organize and track your investments</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <div className={`max-w-md mx-auto ${isDarkMode ? 'bg-[#101010] border-gray-800' : 'bg-white border-gray-100'} p-8 rounded-xl border`}>
              <div className="mb-8">
                <h2 className={`text-2xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Login to your account</h2>
                <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-sm`}>Enter your credentials to access your account</p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-5">
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
                  <div className="flex justify-between mb-1">
                    <label htmlFor="password" className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Password
                    </label>
                    <a href="#" className={`text-sm ${isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'}`}>
                      Forgot password?
                    </a>
                  </div>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={`w-full px-4 py-3 rounded-lg ${isDarkMode 
                      ? 'bg-[#181818] border-gray-700 text-white focus:ring-[#C4FF33]' 
                      : 'bg-white border-gray-300 focus:ring-neon-lime'} 
                      border focus:ring-2 focus:border-transparent outline-none transition-colors`}
                    placeholder="Enter your password"
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
                    {isLoading ? "Logging in..." : "Login"}
                  </button>
                </div>
              </form>
              
              <div className="mt-8 text-center">
                <span className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-sm`}>Don't have an account?</span>{" "}
                <Link to="/signup" className={`${isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'} text-sm font-medium`}>
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
