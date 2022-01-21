import React from "react";
import "./coin.css";
function Coin({ coin }) {
  return (
    <div className="coin">
      <h1>Name:{coin.name}</h1>
      <img src={coin.icon} />
      <h3>Price:{coin.price}</h3>
      <h3>Symbol:{coin.symbol}</h3>
    </div>
  );
}

export default Coin;
