import React from "react";
import ReactDOM from "react-dom";
import {Provider, Box, Button} from 'rendition';
import asyncComponent from './asyncComponent.js';

const AsyncApp = asyncComponent(() => {
  return import('./App');
});

ReactDOM.render(
  <Provider>
    <AsyncApp/>
  </Provider>,
  document.getElementById("root"));
