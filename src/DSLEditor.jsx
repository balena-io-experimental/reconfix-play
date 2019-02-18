import * as React from "react";
import { Component } from "react";
import { Box, Flex } from "rendition";
import Playarea from "./Playarea";
import * as jellyschema from "jellyschema";
import Permalink from "./Permalink";

import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/mode/yaml';
import 'brace/theme/github';

function noop(_event) {
}

class DSLEditor extends Component {
  constructor(props) {
    super(props);
    this.state = { yamlText: "", hasError: false, error: null, formUI: null };
    this.onChange = this.onChange.bind(this);
  }

  onChange(value) {
    this.setState({ yamlText: value });
    try {
      const ui = jellyschema.generateJsonAndUiSchema(value);
      this.setState({formUI: ui, hasError: false });
      if (this.props.onChange) {
        this.props.onChange(value, ui);
      }
    } catch (e) {
      this.onError(e);
    }
  }

  onError(error) {
    this.setState({ hasError: true, error: error });
    if (this.props.onError) {
      this.props.onError(error);
    }
  }

  componentDidMount() {
    this.setDataFromUrl();
  }

  setDataFromUrl() {
    const text = Permalink.decode();
    if (text) {
      this.onChange(text);
    }
  }

  render() {
    return (
      <Box>
        <Permalink text={this.state.yamlText}/>
        <Flex>
          <AceEditor
            width={"100%"}
            mode="yaml"
            theme="github"
            onChange={this.onChange}
            name="UNIQUE_ID_OF_DIV"
            enableBasicAutocompletion={true}
            enableLiveAutocompletion={true}
            tabSize={2}
            value={this.state.yamlText}
          />,
          {this.state.hasError ? (
            <Playarea value={this.state.error} onChange={e => noop(e)}/>
          ) : null}
        </Flex>
      </Box>
    );
  }
}

export default DSLEditor;
