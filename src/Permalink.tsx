import * as React from "react";
import { Component } from "react";
import { Box, Flex, Link, Textarea } from "rendition";

const propertyName = "yaml";

interface PermalinkProps {
  text?: string;
}

class Permalink extends Component<PermalinkProps, any> {
  constructor(props: PermalinkProps) {
    super(props);
  }

  render(): React.ReactNode {
    return (
      <Box>
        <Link href={this.getPermalink()}>permalink</Link>
      </Box>
    );
  }

  getPermalink() {
    try {
      return "?" + propertyName + "=" + encodeURIComponent(this.props.text);
    } catch (e) {
      console.log(e);
    }
  }

  static decode(): string {
    try {
      const params = new URLSearchParams(window.location.search);
      const encoded = params.get(propertyName);
      if (params && encoded) {
        const yaml_from_url = decodeURIComponent(encoded);
        return yaml_from_url;
      }
      return null;
    } catch (e) {
      console.log(e);
    }
  }
}

export default Permalink;
