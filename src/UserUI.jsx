import * as React from "react";
import { Component } from "react";
import { Box, Flex, Heading } from "rendition";
import Playarea from "./Playarea";

import async from "./Async";

const JellyForm = async(() => {
  return import("rendition/dist/unstable/components/JellyForm");
});

const stringify = value => JSON.stringify(value, null, 2);

class UserUI extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formData: null
    };
  }

  renderFormData(event) {
    try {
      this.setState({ formData: stringify(event.formData) });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <Box>
        <Box>
          <Heading.h4 mb={3}>Rendered form</Heading.h4>
          {this.props.yamlText? (
            <JellyForm
              schema={this.props.yamlText}
              onFormChange={event => this.renderFormData(event)}
            />
          ) : null}
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
    );
  }
}

export default UserUI;
