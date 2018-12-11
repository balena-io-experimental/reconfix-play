import * as React from "react";
import { shallow } from "enzyme";

import ErrorBoundary from "../src/ErrorBoundary.tsx";
import { Component } from "react";

class Thrower extends Component {
  render() {
    throw "failure from the component";
  }
}

it("throws without boundary", () => {
  expect(() => shallow(<Thrower />)).toThrow();
});

it("swallows exceptions from children", () => {
  const boundary = shallow(
    <ErrorBoundary>
      <Thrower />
    </ErrorBoundary>
  );
  expect(boundary).toExist();
});
