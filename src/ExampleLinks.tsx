import * as React from "react";
import { Component } from "react";
import { DropDownButton } from "rendition";
import Permalink from "./Permalink";


interface IHash {
  [key: string]: string
}

interface ExampleLinksProps {
  examples: IHash
}

class ExampleLinks extends Component<ExampleLinksProps, any> {

  constructor(props: ExampleLinksProps) {
    super(props);
  }

  render(): React.ReactNode {
    const examples = this.props.examples;
    return (
      <DropDownButton joined={true} label={<div>Examples</div>}>
        {
          Object.keys(examples).sort().map(function(key, index) {
            return (
              <Permalink
                mx={2}
                text={examples[key]}
                key={index}
              >
                {key}
              </Permalink>
            );
          })
        }
      </DropDownButton>
    );
  }
}

export default ExampleLinks;
