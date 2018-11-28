import React from "react";
import ReactDOM from "react-dom";
import {Box, Divider, Heading, Provider} from 'rendition';
import asyncComponent from './asyncComponent.js';

const AsyncApp = asyncComponent(() => {
  return import('./App');
});

ReactDOM.render(
  <Provider>
    <Box>
      <Box>
        <Heading>Play with reconfix cdsl</Heading>
      </Box>
      <Divider/>
      <AsyncApp/>
    </Box>
  </Provider>,
  document.getElementById("root"));
