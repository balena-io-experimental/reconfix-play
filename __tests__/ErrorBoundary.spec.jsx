/* eslint-disable react/require-render-return */

import * as React from "react";
import { Component } from "react";
import { shallow, mount } from "enzyme";

import ErrorBoundary from "../src/ErrorBoundary.tsx";

import async from "../src/Async.js";

class Thrower extends Component {
  render() {
    throw "test failure from the component";
  }
}

const AsyncThrower = async(() => {
  return Thrower;
});

it("swallows exceptions from sync children", () => {
  const boundary = mount(
    <ErrorBoundary>
      <Thrower />
    </ErrorBoundary>
  );
  expect(boundary.contains(<h1>Something went wrong.</h1>)).toBe(true);
});

it("swallows exceptions from async children", async () => {
  const boundary = await mount(
    <ErrorBoundary>
      <AsyncThrower />
    </ErrorBoundary>
  );
  expect(boundary.contains(<h1>Something went wrong.</h1>)).toBe(true);
});

// sanity checks

it("throws without boundary - async", () => {
  expect(() => mount(<AsyncThrower />)).toThrow();
});

it("throws without boundary - sync", () => {
  expect(() => shallow(<Thrower />)).toThrow();
});

/* eslint-enable */
