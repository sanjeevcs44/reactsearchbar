import "./App.css";
import { useEffect, useState } from "react";
import { css } from "@emotion/react";
import axios from "axios";
import Coin from "./components/Coin";
import BounceLoader from "react-spinners/BounceLoader";

function App() {
  const [listOfCoins, setListOfCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchWord, setSearchWord] = useState("");
  useEffect(() => {
    //setLoading(true);
    axios
      .get("https://api.coinstats.app/public/v1/coins?skip=0")
      .then((response) => {
        setListOfCoins(response.data.coins);
        console.log(response.data.coins);
        setLoading(false);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);
  const filteredCoins = listOfCoins.filter((coin) => {
    return coin.name.toLowerCase().includes(searchWord.toLowerCase());
  });
  return loading ? (
    <div className="loader">
      <BounceLoader loading={loading} color={"#123abc"} size={150} />
    </div>
  ) : listOfCoins ? (
    <div className="App">
      <div className="cryptoHeader">
        <input
          type="text"
          className="searchBar"
          placeholder="Bitcoin.."
          onChange={(event) => {
            setSearchWord(event.target.value);
          }}
        />
      </div>
      <div className="cryptoDisplay">
        {filteredCoins.map((coin) => {
          return <Coin coin={coin} key={coin.id} />;
        })}
      </div>
    </div>
  ) : (
    ""
  );
}

export default App;
