import * as React from "react";
import { Component } from "react";
import ExampleLinksDropDown from "./ExampleLinksDropDown";

import ky from "ky";

function importAll(r: any) {
  return r.keys().map(r);
}

const exampleFilePaths = importAll(require.context("../examples", true, /\.(yaml)$/));

interface IHash {
  [key: string]: string
}

let allExamples: IHash = {};

interface AllExamplesState {
  allExamples: IHash
}

class AllExampleLinks extends Component<any, AllExamplesState> {

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
      <ExampleLinksDropDown examples={this.state.allExamples}/>
    );
  }
}

export default AllExampleLinks;
