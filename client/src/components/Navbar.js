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
            <div className="w-36 h-13 mr-4 flex items-center justify-center rounded-full ">
              <img src="/mlogo1.png" alt="logo" className="w-full h-full object-cover" />
            </div>
            
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
