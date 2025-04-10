import React, { useEffect, useState } from "react";
import Cards from "../components/Cards";
import Loadingui from "../components/Loadingui";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Trending = () => {
  const [data, setData] = useState([]);
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  
  useEffect(() => {
    if (user === "") {
      navigate("/");
    } else {
      const url =
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";

      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setData(data);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  if (data.length === 0) {
    return <Loadingui />;
  } else {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#050505] to-[#0A0A0A] backdrop-blur-sm">
        <div className="container mx-auto py-8 px-4">
          <h1 className="text-3xl font-bold mb-8 text-white">
            Trending Cryptocurrencies
          </h1>
          <p className="mb-8 max-w-3xl text-gray-300">
            Explore the most popular cryptocurrencies in the market. Stay updated with real-time data on price changes, market cap, and trading volume.
          </p>
          <Cards data={data} />
        </div>
      </div>
    );
  }
};

export default Trending;
