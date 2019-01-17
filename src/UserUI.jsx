import * as React from "react";
import { Component } from "react";
import { Box, Flex, Heading } from "rendition";
import Playarea from "./Playarea";
import * as temen from "balena-temen";

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
      const evaluated = temen.evaluate(data);
      this.setState({ formData: stringify(evaluated) });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <Box>
        <Box>
          <Heading.h4 mb={3}>Rendered form</Heading.h4>
          <Flex>
            <Form
              schema={this.props.jsonSchema}
              uiSchema={this.props.uiSchema}
              onFormChange={event => this.renderFormData(event)}
              hideSubmitButton={false}
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
