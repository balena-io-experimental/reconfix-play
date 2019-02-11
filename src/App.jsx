import * as React from "react";
import { Component } from "react";
import { Box, Divider, Flex, Heading } from "rendition";
import Links from "./Links.tsx";
import Playarea from "./Playarea.tsx";
import DSLEditor from "./DSLEditor.jsx";
import UserUI from "./UserUI.jsx";

const stringify = value => JSON.stringify(value, null, 2);

class App extends Component {
  constructor() {
    super();

    this.state = {
      yamlText: "",
      json_schema_text: "",
      json_schema: {},
      ui_object_text: "",
      ui_object: {},
      formData: "",
      hasError: false
    };
  }

  noop() {
  }

  onDSLChanged(text, ui) {
    const jsonSchemaText = stringify(ui.jsonSchema);
    const uiSchemaText = stringify(ui.uiSchema);
    this.setState({
      yamlText: text,
      json_schema: ui.jsonSchema,
      json_schema_text: jsonSchemaText,
      ui_object: ui.uiSchema,
      ui_object_text: uiSchemaText,
      hasError: false
    });
  }

  onDSLError(error) {
    this.setState({ hasError: true });
  }

  render() {
    return (
      <Box>
        <Links/>
        <Divider/>
        <DSLEditor
          onChange={(text, ui) => this.onDSLChanged(text, ui)}
          onError={error => this.onDSLError(error)}
        />
        <Divider/>
        {!this.state.hasError ? (
          <UserUI
            yamlText={this.state.yamlText}
          />
        ) : null}
        <Divider/>
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
        <Divider/>
      </Box>
    );
  }
}

export default App;
