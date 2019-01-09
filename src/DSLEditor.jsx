import * as React from "react";
import { Component } from "react";
import { Box, Flex} from "rendition";
import Playarea from "./Playarea";
import * as cdsl from "balena-cdsl";
import Permalink from "./Permalink";

function noop(_event) {}

class DSLEditor extends Component {
  constructor(props) {
    super(props);
    this.state = { yaml_text: "", hasError: false, error: null, form_ui: null };
  }

  evaluate(value) {
    this.setState({ yaml_text: value });
    try {
      const ui = cdsl.generate_ui(value);
      this.onChange(value, ui);
    } catch (e) {
      this.onError(e);
    }
  }

  onChange(yamlText, ui) {
    this.setState({ hasError: false, form_ui: ui });
    if (this.props.onChange) {
      this.props.onChange(yamlText, ui);
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
      this.evaluate(text);
    }
  }
  render() {
    console.log(this.state.yaml_text)
    const b64 = btoa(this.state.yaml_text)
    console.log(b64)
    console.log(atob(b64))
    return (
      <Box>
        <Permalink text={this.state.yaml_text} />
        <Flex>
          <Playarea
            placeholder="yaml"
            onChange={event => this.evaluate(event.target.value)}
            value={this.state.yaml_text}
          />
          {this.state.hasError ? (
            <Playarea value={this.state.error} onChange={e => noop(e)} />
          ) : null}
        </Flex>
      </Box>
    );
  }
}

export default DSLEditor;
