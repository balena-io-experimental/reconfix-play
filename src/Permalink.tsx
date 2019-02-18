import * as React from "react";
import { Component } from "react";
import { DefaultProps, Link } from "rendition";
import * as pako from "pako";
const propertyName = "yaml";

interface PermalinkProps extends DefaultProps {
  text?: string;
}

class Permalink extends Component<PermalinkProps, any> {
  constructor(props: PermalinkProps) {
    super(props);
  }

  static encode(text: string): string {
    let deflated = pako.deflate(text, { to: 'string'});
    let base64encoded = btoa(deflated);
    let uriEncoded = encodeURIComponent(base64encoded);
    return uriEncoded;
  }

  static decode(): string {
    try {
      const params = new URLSearchParams(window.location.search);
      const encoded = params.get(propertyName);
      if (params && encoded) {
        let base64encoded = decodeURIComponent(encoded);
        let deflated = atob(base64encoded);
        let inflated = pako.inflate(deflated, {to: 'string'});
        return inflated;
      }
      return null;
    } catch (e) {
      console.log(e);
    }
  }

  render(): React.ReactNode {
    const {
      children,
      text,
      ...props
    } = this.props;
    return (
      <Link {...props} href={this.getPermalink()}>{children || "permalink"}</Link>
    );
  }

  getPermalink() {
    try {
      return "?" + propertyName + "=" + Permalink.encode(this.props.text);
    } catch (e) {
      console.log(e);
    }
  }
}

export default Permalink;
