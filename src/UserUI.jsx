import * as React from "react";
import { Component } from "react";
import { Box, Flex, Heading } from "rendition";
import Playarea from "./Playarea.tsx";

import { Form } from "rendition/dist/unstable";

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
      const data = event.formData;
      this.setState({ formData: stringify(data) });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <Box>
        <Box>
          <Heading.h4>Rendered form</Heading.h4>
          <Flex>
            <Form
              schema={this.props.jsonSchema}
              uiSchema={this.props.uiSchema}
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
    );
  }
}

export default UserUI;
