import "./App.css";

import React, {Component} from "react";
import {Textarea, Box, Flex} from 'rendition';

import * as temen from 'balena-temen';

class App extends Component {
  render() {
    return (
      <Box my={3} mx={['auto', 15]}>
        <Flex>
          <Textarea/>
          <Textarea/>
          <Textarea/>
        </Flex>
      </Box>
    );
  }
}

export default App;
