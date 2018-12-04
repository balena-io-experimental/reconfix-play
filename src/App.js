import "./App.css";

import React, {Component} from "react";
import {Box, Divider, Flex, Link, Textarea, Heading} from 'rendition';
import {Form} from 'rendition/dist/unstable'
import * as cdsl from 'balena-cdsl';
import Links from './Links.tsx'


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
      has_error: false,
      formData: '',
      errors: ''
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
        has_error: false
      })
    } catch (e) {
      this.setState({
        has_error: true,
        errors: e
      })
    }
  }

  componentDidMount() {
    this.setDataFromUrl()
  }

  setDataFromUrl() {
    try {
      const params = new URLSearchParams(window.location.search)
      const encoded = params.get('yaml')
      if (params && encoded) {
        const yaml_from_url = decodeURIComponent(encoded)
        this.evaluate(yaml_from_url)
      }
    } catch (e) {
      console.log(e)
    }
  }

  getPermalink() {
    try {
      return '?yaml=' + encodeURIComponent(this.state.yaml_text)
    } catch (e) {
      console.log(e)
    }
  }

  renderFormData(event) {
    try {
      const data = event.formData
      this.setState({formData: stringify(data)})
    } catch (e) {
      console.log(e)
    }
  }

  noTab(event) {
    const keyCode = event.keyCode || event.which;

    if (keyCode == 9) {
      event.preventDefault();
    }
  }

  render() {
    return (
      <Box>
        <Links/>
        <Divider/>
        <Link href={this.getPermalink()}>
          permalink
        </Link>
        <Box>
          <Flex flexDirection={'column'}>
            <Flex>
            <Textarea monospace minRows={12} autoRows={true} maxRows={16} placeholder="yaml"
                      onChange={event => this.evaluate(event.target.value)}
                      value={this.state.yaml_text} onKeyDown={ event => this.noTab(event)}
            />
            </Flex>
          </Flex>
        </Box>
        <Divider/>
        {!this.state.has_error ?
          <Box>
            <Box>
              <Heading.h4>Rendered form</Heading.h4>
              <Flex>
              <Form schema={this.state.json_schema} uiSchema={this.state.ui_object}
                    onFormSubmit={event => this.renderFormData(event)}/>
              </Flex>
            </Box>
            {this.state.formData ?
            <Box>
              <Heading.h4>Form data (dry json)</Heading.h4>
              <Flex>
                <Textarea monospace autoRows={true} readOnly={true} placeholder={'form data'}
                          value={this.state.formData}
                          onChange={event => {
                          }}/>
              </Flex>
            </Box>
              : null}
          </Box>
          : null}
        <Divider/>
        <Box>
          {this.state.has_error ?
            <Box>
              <Flex>
                <Textarea monospace autoRows={true} readOnly={true} placeholder="errors"
                          onChange={event => {
                          }}
                          value={this.state.errors}/>
              </Flex>
            </Box>
            : null}
          {!this.state.has_error ?
            <Box>
            <Heading.h4>JSON and UI schemas</Heading.h4>
            <Flex>
            <Textarea monospace autoRows={true} readOnly={true} maxRows={16} placeholder="json schema"
                      onChange={event => {
                      }}
                      value={this.state.json_schema_text}
            />
              <Textarea monospace autoRows={true} readOnly={true} maxRows={16} placeholder="ui object"
                        onChange={event => {
                        }}
                        value={this.state.ui_object_text}
              />
            </Flex>
            </Box>
            : null}
        </Box>
        <Divider/>
      </Box>
    );
  }
}

export default App;
