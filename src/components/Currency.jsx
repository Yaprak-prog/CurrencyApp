import React, { useState } from "react";
import styles from "../components/currency.module.css";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import axios from "axios";

let BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
let API_KEY = "fca_live_109JxEWGQwAljxXtg3xWXV2uYtLpzkwMTzwmsCrE";

function Currency() {
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("TRY");
  const [result, setResult] = useState(0);

  const exchange = async () => {
    const response = await axios.get(
      `${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`
    );
    const result = (response.data.data[toCurrency] * amount).toFixed(2);
    setResult(result);
  };

  return (
    <div className={styles.main}>
      <div
        style={{
          backgroundColor: "darkblue",
          fontFamily: "arial",
          width: "100%",
          textAlign: "center",
          color: "white",
        }}
      >
        <h3>CURRENCY APP</h3>
      </div>
      <div style={{ marginTop: "35px" }}>
        <input
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          type="number"
          className={styles.amount}
        />
        <select
          onChange={(e) => setFromCurrency(e.target.value)}
          className={styles.fromCurrency}
        >
          <option>USD</option>
          <option>TRY</option>
          <option>EUR</option>
        </select>
        <FaRegArrowAltCircleRight
          style={{
            marginRight: "10px",
            fontSize: "25px",
            marginTop: "-3px",
            color: "darkblue",
          }}
        />
        <select
          onChange={(e) => setToCurrency(e.target.value)}
          className={styles.toCurrency}
        >
          <option>TRY</option>
          <option>USD</option>
          <option>EUR</option>
        </select>
        <input
          value={result}
          onChange={(e) => {
            setResult(e.target.value);
          }}
          type="number"
          className={styles.result}
        />
      </div>
      <div>
        <button onClick={exchange} className={styles.button}>
          Converter
        </button>
      </div>
    </div>
  );
}

export default Currency;
