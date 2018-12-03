import "./App.css";

import React, {Component} from "react";
import {Box, Divider, Flex, Link, Textarea, Heading} from 'rendition';
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

  render() {
    return (
      <Box>
        Examples:
        <a
          href={'?yaml=version%3A 1%0Aproperties%3A%20%0A - a%3A%0A%20%20%20 type%3A string'}>
          one property
        </a>
        &nbsp;|&nbsp;
        <a
          href={'?yaml=title%3A resin-cli demo%0Aversion%3A 1%0Adefinitions%3A%0A%20 bootPartition%3A %26BOOT_PARTITION%0A%20%20%20 partition%3A 1%0Amapping%3A%0A%20 targets%3A%0A%20%20%20 config_json%3A%0A%20%20%20%20%20 type%3A file%0A%20%20%20%20%20 format%3A json%0A%20%20%20%20%20 location%3A%0A%20%20%20%20%20%20%20 << %3A *BOOT_PARTITION%0A%20%20%20%20%20%20%20 path%3A %2Fconfig.json%0A%20%20%20 resin_wifi%3A%0A%20%20%20%20%20 type%3A file%0A%20%20%20%20%20 format%3A ini%0A%20%20%20%20%20 location%3A%0A%20%20%20%20%20%20%20 << %3A *BOOT_PARTITION%0A%20%20%20%20%20%20%20 path%3A %2Fsystem-connections%2Fresin-wifi%0Aproperties%3A%0A%20 - network%3A%0A%20%20%20%20%20 title%3A Network%0A%20%20%20%20%20 properties%3A%0A%20%20%20%20%20%20%20 - ssid%3A%0A%20%20%20%20%20%20%20%20%20%20%20 title%3A Network SSID%0A%20%20%20%20%20%20%20%20%20%20%20 type%3A string%0A%20%20%20%20%20%20%20%20%20%20%20 minLength%3A 1%0A%20%20%20%20%20%20%20%20%20%20%20 maxLength%3A 32%0A%20%20%20%20%20%20%20%20%20%20%20 mapping%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20 target%3A resin_wifi%0A%20%20%20%20%20%20%20%20%20%20%20%20%20 path%3A wifi.ssid%0A%20%20%20%20%20%20%20 - passphrase%3A%0A%20%20%20%20%20%20%20%20%20%20%20 title%3A Network Key%0A%20%20%20%20%20%20%20%20%20%20%20 type%3A password%0A%20%20%20%20%20%20%20%20%20%20%20 minLength%3A 8%0A%20%20%20%20%20%20%20%20%20%20%20 mapping%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20 target%3A resin_wifi%0A%20%20%20%20%20%20%20%20%20%20%20%20%20 path%3A wifi-security.psk%0A%20%20%20%20%20 mapping%3A%0A%20%20%20%20%20%20%20 target%3A resin_wifi%0A%20%20%20%20%20%20%20 template%3A%0A%20%20%20%20%20%20%20%20%20 connection%3A%0A%20%20%20%20%20%20%20%20%20%20%20 type%3A wifi%0A%20%20%20%20%20%20%20%20%20 wifi%3A%0A%20%20%20%20%20%20%20%20%20%20%20 hidden%3A true%0A%20%20%20%20%20%20%20%20%20%20%20 mode%3A infrastructure%0A%20%20%20%20%20%20%20%20%20 wifi-security%3A%0A%20%20%20%20%20%20%20%20%20%20%20 auth-alg%3A open%0A%20%20%20%20%20%20%20%20%20%20%20 key-mgmt%3A wpa-psk%0A%20%20%20%20%20%20%20%20%20 ipv4%3A%0A%20%20%20%20%20%20%20%20%20%20%20 method%3A auto%0A%20%20%20%20%20%20%20%20%20 ipv6%3A%0A%20%20%20%20%20%20%20%20%20%20%20 addr-gen-mode%3A stable-privacy%0A%20%20%20%20%20%20%20%20%20%20%20 method%3A auto%0A%20 - advanced%3A%0A%20%20%20%20%20 title%3A Advanced%0A%20%20%20%20%20 properties%3A%0A%20%20%20%20%20%20%20 - hostname%3A%0A%20%20%20%20%20%20%20%20%20%20%20 title%3A Device Hostname%0A%20%20%20%20%20%20%20%20%20%20%20 type%3A string%0A%20%20%20%20%20%20%20%20%20%20%20 mapping%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20 target%3A config_json%0A%20%20%20%20%20%20%20%20%20%20%20%20%20 path%3A hostname%0A%20%20%20%20%20%20%20 - persistentLogging%3A%0A%20%20%20%20%20%20%20%20%20%20%20 title%3A Do you want to enable persistent logging%3F%0A%20%20%20%20%20%20%20%20%20%20%20 type%3A boolean%0A%20%20%20%20%20%20%20%20%20%20%20 default%3A false%0A%20%20%20%20%20%20%20%20%20%20%20 mapping%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20 target%3A config_json%0A%20%20%20%20%20%20%20%20%20%20%20%20%20 path%3A persistentLogging'}>
          balena cli
        </a>
        <Divider/>
        Documentation:
        <a href={'https://github.com/balena-io-modules/balena-cdsl/blob/master/docs/SPEC_SUPPORT.md'}>What is
          supported</a>
        &nbsp;|&nbsp;
        <a
          href={'https://github.com/balena-io/balena/blob/832f5551127dd8e1e82fa082bea97fc4db81c3ce/specs/configuration-dsl.md'}>DSL
          specification</a>

        <Divider/>
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
        {!this.state.has_error ?
          <Box>
            <Box>
              <Heading.h3>Rendered form</Heading.h3>
              <Flex>
              <Form schema={this.state.json_schema} uiSchema={this.state.ui_object}
                    onFormSubmit={event => this.renderFormData(event)}/>
              </Flex>
            </Box>
            <Box>
              <Heading.h3>Form data (dry json)</Heading.h3>
              <Flex>
                <Textarea monospace autoRows={true} readOnly={true} placeholder={'form data'}
                          value={this.state.formData}
                          onChange={event => {
                          }}/>
              </Flex>
            </Box>
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
            : null}
        </Box>
        <Divider/>
      </Box>
    );
  }
}

export default App;
