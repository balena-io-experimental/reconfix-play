import "./App.css";

import React, {Component} from "react";
import {Box, Divider, Flex, Link, Textarea} from 'rendition';
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
      yaml_text: '',
      errors: ''
    }

  }

  componentDidMount() {
    try {
      const yaml_from_url = decodeURIComponent(new URLSearchParams(window.location.search).get('yaml'));
      if (yaml_from_url) {
        this.evaluate(yaml_from_url)
      }
    } catch (e) {
      console.log(e)
    }
  }

  evaluate(value) {
    this.setState({yaml_text: value})
    try {
      const evaluated = cdsl.generate_ui(value)
      this.setState({
        json_schema: evaluated.json_schema,
        ui_object: evaluated.ui_object,
        json_schema_text: stringify(evaluated.json_schema),
        ui_object_text: stringify(evaluated.ui_object),
        errors: ''
      })
    } catch (e) {
      this.setState({
        json_schema: '',
        ui_object: '',
        json_schema_text: '',
        ui_object_text: '',
        errors: e
      })
    }
  }

  getPermalink() {
    try {
      return '?yaml=' + encodeURIComponent(this.state.yaml_text)
    } catch (e) {
      console.log(e)
    }
  }

  render() {
    return (
      <Box>
        <Link href={this.getPermalink()}>
          permalink
        </Link>
        <Box>
          <Flex flexDirection={'column'}>
            <Flex>
            <Textarea monospace minRows={12} autoRows={true} placeholder="yaml"
                      onChange={event => this.evaluate(event.target.value)}
                      value={this.state.yaml_text}
            />
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
