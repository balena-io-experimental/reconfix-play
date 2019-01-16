import * as React from "react";
import { Component } from "react";
import { Box, Divider } from "rendition";
import ExampleLinks from "./ExampleLinks";

import ky from "ky";

function importAll(r: any) {
  return r.keys().map(r);
}

const exampleFilePaths = importAll(require.context("../examples", true, /\.(yaml)$/));

interface IHash {
  [key: string]: string
}

let allExamples: IHash = {};

interface LinksState {
  allExamples: IHash
}

class Links extends Component<any, LinksState> {

  constructor(props: any) {
    super(props);
    this.state = { allExamples: {} };
  }

  componentDidMount(): void {
    exampleFilePaths.map((path: string) => {
      ky.get(path).text().then((content) => {
        const name = path.replace("examples/", "");
        allExamples[name] = content;
      }).then(() => {
        this.setState({ allExamples: allExamples });
      });
    });
  }

  render(): React.ReactNode {
    return (
      <Box>
        Documentation:
        <a href={"https://github.com/balena-io-modules/balena-cdsl/issues/15"}>
          What is supported
        </a>
        &nbsp;|&nbsp;
        <a
          href={
            "https://github.com/balena-io/balena/blob/9471e79bcdaa75a567e89b7d3ce4a11979d38485/specs/configuration-dsl.md"
          }
        >
          DSL specification
        </a>
        &nbsp;|&nbsp;
        <a
          href={
            "https://github.com/balena-io/balena/blob/614c8f4c3960008f5da7feb63752040287c1f540/specs/configuration-dsl-mapping-extension.md"
          }
        >
          Mapping extensions
        </a>
        &nbsp;|&nbsp;
        <a
          href={
            "https://github.com/balena-io/balena/blob/8e9c7c177e8d730484fbfce5c4281d4c7c205565/specs/json-schema-extensions.md"
          }
        >
          JSON Schema extensions
        </a>
        <Divider/>
        <ExampleLinks examples={this.state.allExamples}/>
      </Box>
    );
  }
}

export default Links;
