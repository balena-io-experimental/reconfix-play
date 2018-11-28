import "./App.css";

import React, {Component} from "react";
import {Box, Flex, Textarea, Divider, Heading} from 'rendition';
import {Form} from 'rendition/dist/unstable'
import * as cdsl from 'balena-cdsl';

const stringify = (value) => JSON.stringify(value, null, 2)

class App extends Component {

  constructor() {
    super();

    this.state = {
      json_schema_text: '',
      json_schema: {},
      ui_object_text: '',
      ui_object: {},
      errors: ''
    }
  }

  evaluate(value) {
    try {
      const evaluated = cdsl.generate_ui(value)
      this.setState({json_schema: evaluated.json_schema})
      this.setState({ui_object: evaluated.ui_object})
      this.setState({json_schema_text: stringify(evaluated.json_schema)})
      this.setState({ui_object_text: stringify(evaluated.ui_object)})
      this.setState({errors: ''})
    } catch (e) {
      this.setState({json_schema: {}})
      this.setState({ui_object: {}})
      this.setState({json_schema_text: ''})
      this.setState({ui_object_text: ''})
      this.setState({errors: e})
    }
  }

  render() {
    return (
      <Box>
        <Box>
          <Flex flexDirection={'column'}>
            <Flex>
            <Textarea monospace minRows={12} autoRows={true} placeholder="yaml"
                      onChange={event => this.evaluate(event.target.value)}/>
            </Flex>
            <Flex>
              <Form schema={this.state.json_schema} hideSubmitButton={true}/>
            </Flex>
          </Flex>
        </Box>
        <Divider/>
        <Box>
          <Box>
            <Flex>
            <Textarea monospace autoRows={true} readOnly={true} placeholder="errors"
                      onChange={event => {
                      }}
                      value={this.state.errors}/>
            </Flex>
          </Box>
          <Flex>
            <Textarea monospace autoRows={true} readOnly={true} placeholder="json schema"
                      onChange={event => {
                      }}
                      value={this.state.json_schema_text}
            />
            <Textarea monospace autoRows={true} readOnly={true} placeholder="ui object"
                      onChange={event => {
                      }}
                      value={this.state.ui_object_text}
            />
          </Flex>
        </Box>
        <Divider/>
      </Box>
    );
  }
}

export default App;
