import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import('balena-temen').catch(e => console.error("Error importing `index.js`:", e));

ReactDOM.render(<App />, document.getElementById("root"));
