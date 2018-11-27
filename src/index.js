import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import('balena-temen').
catch(e => console.error("Error importing `index.js`:", e)).
then( temen => console.log(temen.evaluate({"$$eval": "1+3"})));

ReactDOM.render(<App />, document.getElementById("root"));
