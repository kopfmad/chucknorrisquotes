import React, { useContext, useState } from "react";

export default function Card() {
  let [texto, setTexto] = useState("Click to get quotes");

  async function getQuote() {
    let chuckurl = "https://api.chucknorris.io/jokes/random";
    let res = await fetch(chuckurl);
    let resp = await res.json();
    setTexto(resp.value);
  }

  return (
    <div className="Card">
      <h2 key={Math.random()}>{texto}</h2>
      <button onClick={getQuote}>
        <h4>Click</h4>
      </button>
    </div>
  );
}
