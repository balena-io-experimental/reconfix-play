// error with imports
import * as React from "react";
import { shallow } from "enzyme";

import Permalink from "../src/Permalink.tsx";

it("decodes no text", () => {
  window.history.pushState({}, "", "/");
  const decoded = Permalink.decode();
  expect(decoded).toBeNull();
});

it("decodes text", () => {
  window.history.pushState(
    {},
    "",
    "/?yaml=version%3A 1%0Aproperties%3A%20%0A - a%3A%0A%20%20%20 type%3A string"
  );
  const decoded = Permalink.decode();
  expect(decoded).toBeDefined();
});
