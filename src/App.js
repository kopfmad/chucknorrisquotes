import React from "react";
import "../src/index.css";

function App(props) {
  return (
    <div className="App">
      <h1>App do Chuck Norris</h1>
      {props.children}
    </div>
  );
}

export default App;
