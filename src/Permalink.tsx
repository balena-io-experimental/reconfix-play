import * as React from "react";
import { Component } from "react";
import { Box, Link } from "rendition";
import { URLSearchParams } from "url";

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
        return decodeURIComponent(encoded);
      }
      return null;
    } catch (e) {
      console.log(e);
    }
  }
}

export default Permalink;
