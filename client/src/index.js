import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import {
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Top10 from "./pages/Top10";
import Trending from "./pages/Trending";
import Watchlist from "./pages/Watchlist";

import CoinByID from "./pages/CoinByID";
import { createContext } from "react";
import { Provider } from "react-redux";
import { appStore } from "./store/appStore";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import { ThemeProvider } from "./components/ThemeProvider";

export const Data = createContext();

const Applayout = () => {
  return (
    <Provider store={appStore}>
      <ThemeProvider>
        <Data.Provider value={"Anmol"}>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              <Outlet />
            </main>
            <Footer />
          </div>
        </Data.Provider>
      </ThemeProvider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    element: <Applayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/top10", element: <Top10 /> },
      { path: "/watchlist", element: <Watchlist /> },
      { path: "/trending", element: <Trending /> },
      { path: "/coin/:id", element: <CoinByID /> },
      { path: "/signup", element: <Signup /> },
      { path: "/login", element: <Login /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
