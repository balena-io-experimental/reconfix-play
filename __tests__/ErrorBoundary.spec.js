import * as React from "react";
import { shallow } from "enzyme";

import ErrorBoundary from "../src/ErrorBoundary.tsx";
import { Component } from "react";

import async from "../src/Async.js";

class Thrower extends Component {
  render() {
    throw "failure from the component";
  }
}

const AsyncThrower = async(() => {
  return Thrower;
});

it("swallows exceptions from sync children", () => {
  const boundary = shallow(
    <ErrorBoundary>
      <Thrower />
    </ErrorBoundary>
  );
  expect(boundary).toExist();
});

it("swallows exceptions from async children", () => {
  const boundary = shallow(
    <ErrorBoundary>
      <AsyncThrower />
    </ErrorBoundary>
  );
  expect(boundary).toExist();
});

// sanity checks

it("throws without boundary - sync", () => {
  expect(() => shallow(<AsyncThrower />)).toThrow();
});

it("throws without boundary - async", () => {
  expect(() => shallow(<Thrower />)).toThrow();
});
