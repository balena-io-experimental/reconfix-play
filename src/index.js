import React from "react";
import ReactDOM from "react-dom";
import { Box, Divider, Heading, Provider } from "rendition";
import async from "./Async";
import ErrorBoundary from "./ErrorBoundary";

const App = async(() => {
  return import("./App");
});

ReactDOM.render(
  <Provider>
    <Box>
      <Box>
        <Heading.h2>Play with reconfix</Heading.h2>
      </Box>
      <Divider />
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </Box>
  </Provider>,
  document.getElementById("root")
);
