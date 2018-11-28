import "./App.css";

import React, {Component} from "react";
import {Textarea, Box, Flex, Divider, Heading} from 'rendition';

import * as cdsl from 'balena-cdsl';

const stringify = (value) => JSON.stringify(value, null, 2)

class App extends Component {

  constructor () {
    super();

    this.state = {
      json_schema: '',
      ui_object: '',
      errors: ''
    }
  }

  evaluate(value) {
    try {
      const evaluated = cdsl.generate_ui(value)
      this.setState({json_schema: stringify(evaluated.json_schema)})
      this.setState({ui_object: stringify(evaluated.ui_object)})
      this.setState({errors: ''})
    }
    catch (e) {
      this.setState({json_schema: ''})
      this.setState({ui_object: ''})
      this.setState({errors: e})
    }
  }

  render() {
    return (
      <Box>
        <Box>
          <Heading>Play with reconfix cdsl</Heading>
        </Box>
        <Divider/>
        <Box>
          <Flex>
            <Textarea monospace autoRows={true} placeholder="yaml"
                      onInput={ event=> this.evaluate(event.target.value) }/>
            <Textarea monospace autoRows={true} readOnly={true} placeholder="json schema"
                      onChange={ event=> {} }
                      value={this.state.json_schema}
            />
            <Textarea monospace autoRows={true} readOnly={true} placeholder="ui object"
                      onChange={event =>{} }
                      value={this.state.ui_object}
            />
          </Flex>
        </Box>
        <Box>
          <Flex>
            <Textarea monospace autoRows={true} readOnly={true} placeholder="errors"
                      onChange={ event=>{} }
                      value={this.state.errors} />
          </Flex>
        </Box>
      </Box>
    );
  }
}

export default App;
