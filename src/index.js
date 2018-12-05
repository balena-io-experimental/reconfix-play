import React from 'react'
import ReactDOM from 'react-dom'
import { Box, Divider, Heading, Provider } from 'rendition'
import async from './Async.js'

const App = async(() => {
  return import('./App');
});

ReactDOM.render(
  <Provider>
    <Box>
      <Box>
        <Heading.h2>Play with reconfix cdsl</Heading.h2>
      </Box>
      <Divider/>
      <App/>
    </Box>
  </Provider>,
  document.getElementById("root"));
