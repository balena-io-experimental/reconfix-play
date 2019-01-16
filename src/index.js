import React from "react";
import ReactDOM from "react-dom";
import { Box, Divider, Flex, Heading, Provider } from "rendition";
import async from "./Async";
import ErrorBoundary from "./ErrorBoundary";

const App = async(() => {
  return import("./App");
});

ReactDOM.render(
  <Provider>
    <Box>
      <Flex>
        <Heading.h2>Play with reconfix</Heading.h2>
        <a href="https://circleci.com/gh/balena-io-playground/reconfix-play/tree/master">
          <img src="https://circleci.com/gh/balena-io-playground/reconfix-play/tree/master.svg?style=svg"/>
        </a>
      </Flex>
      <Divider/>
      <ErrorBoundary>
        <App/>
      </ErrorBoundary>
    </Box>
  </Provider>
  ,
  document.getElementById("root")
);
