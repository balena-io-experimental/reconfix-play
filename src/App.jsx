import * as React from "react";
import { Component } from "react";
import { Box, Divider, Flex, Heading, Textarea } from "rendition";
import { Form } from "rendition/dist/unstable";
import Links from "./Links.tsx";
import Permalink from "./Permalink.tsx";
import Playarea from "./Playarea.tsx";
import DSLEditor from "./DSLEditor.jsx";

const stringify = value => JSON.stringify(value, null, 2);

class App extends Component {
  constructor() {
    super();

    this.state = {
      json_schema_text: "",
      json_schema: {},
      ui_object_text: "",
      ui_object: {},
      formData: "",
      hasError: false
    };
  }

  renderFormData(event) {
    try {
      const data = event.formData;
      this.setState({ formData: stringify(data) });
    } catch (e) {
      console.log(e);
    }
  }

  noop() {}

  onDSLChanged(text, ui) {
    const jsonSchemaText = stringify(ui.json_schema);
    const uiSchemaText = stringify(ui.ui_object);
    this.setState({
      json_schema: ui.json_schema,
      json_schema_text: jsonSchemaText,
      ui_object: ui.ui_object,
      ui_object_text: uiSchemaText,
      hasError: false
    });
  }

  onDSLError(error) {
    this.setState({hasError: true})
  }

  render() {
    return (
      <Box>
        <Links />
        <Divider />
        <DSLEditor onChange={(text, ui) => this.onDSLChanged(text, ui)} onError={(error) => this.onDSLError(error)} />
        <Divider />
          {!this.state.hasError ? (
          <Box>
            <Box>
              <Heading.h4>Rendered form</Heading.h4>
              <Flex>
                <Form
                  schema={this.state.json_schema}
                  uiSchema={this.state.ui_object}
                  onFormSubmit={event => this.renderFormData(event)}
                />
              </Flex>
            </Box>
            {this.state.formData ? (
              <Box>
                <Heading.h4>Form data (dry json)</Heading.h4>
                <Flex>
                  <Playarea
                    placeholder={"form data"}
                    value={this.state.formData}
                    onChange={e => this.noop(e)}
                  />
                </Flex>
              </Box>
            ) : null}
          </Box>
        ) : null}
        <Divider />
        <Box>
          {!this.state.hasError ? (
            <Box>
              <Heading.h4>JSON and UI schemas</Heading.h4>
              <Flex>
                <Playarea
                  placeholder="json schema"
                  onChange={e => this.noop(e)}
                  value={this.state.json_schema_text}
                />
                <Playarea
                  placeholder="ui object"
                  onChange={e => this.noop(e)}
                  value={this.state.ui_object_text}
                />
              </Flex>
            </Box>
          ) : null}
        </Box>
        <Divider />
      </Box>
    );
  }
}

export default App;
