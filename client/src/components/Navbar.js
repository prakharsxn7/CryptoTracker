import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeUser } from "../store/userSlice";

function Navbar() {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleClick() {
    dispatch(removeUser());
    navigate("/");
  }

  return (
    <div className="w-full border-b border-gray-800 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to={"/"} className="flex items-center">
            <div className="w-8 h-8 mr-2 flex items-center justify-center bg-[#C4FF33] rounded-full">
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" 
                  stroke="black" 
                  strokeWidth="2"
                />
                <path 
                  d="M7.5 12.5L10.5 15.5L16.5 9.5" 
                  stroke="black" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-white">
              Crypto<span className="text-[#C4FF33]">Tracker</span>
            </h1>
          </Link>

          {/* Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {user === "logged in" && (
              <div className="flex items-center space-x-10 font-medium text-white">
                <Link to={"/top10"} className="transition-colors hover:text-blue-600">
                  Top 10
                </Link>
                <Link to={"/trending"} className="transition-colors hover:text-blue-600">
                  Trending
                </Link>
                <Link to={"/watchlist"} className="transition-colors hover:text-blue-600">
                  Watchlist
                </Link>
              </div>
            )}
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center gap-4">
            {/* Auth Buttons */}
            {user === "logged in" ? (
              <button
                onClick={handleClick}
                className="rounded-full bg-[#C4FF33] text-black px-5 py-2.5 text-sm font-medium transition-transform hover:scale-105"
              >
                Logout
              </button>
            ) : (
              <div className="flex gap-3">
                <Link to={"/login"}>
                  <button className="rounded-full bg-gray-800 hover:bg-gray-700 text-white px-5 py-2.5 text-sm font-medium transition-colors">
                    Login
                  </button>
                </Link>
                <Link to={"/signup"}>
                  <button className="rounded-full bg-[#C4FF33] text-black px-5 py-2.5 text-sm font-medium transition-transform hover:scale-105">
                    Signup
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
