import React, { useEffect, useState } from "react";
import Cards from "../components/Cards";
import Loadingui from "../components/Loadingui";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Top10 = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  useEffect(() => {
    if (user === "") {
      navigate("/");
    } else {
      const url =
        "https://api.coingecko.com/api/v3/search/trending/?precision=3";

      fetch(url).then((response) =>
        response.json().then((data) => setData(data))
      );
    }
  }, [user]);

  return data.length === 0 ? (
    <Loadingui />
  ) : (
    <div className="min-h-screen bg-gradient-to-br from-[#050505] to-[#0A0A0A] backdrop-blur-sm">
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-8 text-white">
          Top 10 Trending
        </h1>
        <p className="mb-8 max-w-3xl text-gray-300">
          The most searched cryptocurrencies in the last 24 hours. These are the coins generating the most interest in the crypto community right now.
        </p>
        <Cards data={data.coins} checker={"top10"} />
      </div>
    </div>
  );
};

export default Top10;
