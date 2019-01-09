import * as React from "react";
import { Component } from "react";
import { Box, Link, DefaultProps } from "rendition";

const propertyName = "yaml";

interface PermalinkProps extends DefaultProps {
  text?: string;
}

class Permalink extends Component<PermalinkProps, any> {
  constructor(props: PermalinkProps) {
    super(props);
  }

  render(): React.ReactNode {
    const {
      children,
      text,
      ...props
    } = this.props
    return (
      <Link {...props} href={this.getPermalink()}>{children || 'permalink'}</Link>
    );
  }

  getPermalink() {
    try {
      return "?" + propertyName + "=" + Permalink.encode(this.props.text);
    } catch (e) {
      console.log(e);
    }
  }

  static encode(text: string): string {
    return encodeURIComponent(btoa(text));
  }

  static decode(): string {
    try {
      const params = new URLSearchParams(window.location.search);
      const encoded = params.get(propertyName);
      if (params && encoded) {
        return atob(decodeURIComponent(encoded));
      }
      return null;
    } catch (e) {
      console.log(e);
    }
  }
}

export default Permalink;
