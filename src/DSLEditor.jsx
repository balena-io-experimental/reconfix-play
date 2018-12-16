import * as React from "react";
import { Component } from "react";
import { Box, Divider, Flex, Txt } from "rendition";
import Playarea from "./Playarea.tsx";
import * as cdsl from "balena-cdsl";

const stringify = (value) => JSON.stringify(value, null, 2);

function noop(_event) {}

class DSLEditor extends Component {
  constructor(props) {
    super(props);
    this.state = { yaml_text: "" };
  }

  evaluate(value) {
    this.setState({ yaml_text: value });
    try {
      const ui = cdsl.generate_ui(value);
    } catch (e) {
      console.error(e);
    }
  }

  componentWillReceiveProps(
    nextProps,
    nextContext
  ) {
    this.evaluate(nextProps.text);
  }

  render() {
    return (
      <Box>
        <Playarea
          placeholder="yaml"
          onChange={event => this.evaluate(event.target.value)}
          value={this.state.yaml_text}
        />
      </Box>
    );
  }
}

export default DSLEditor;
