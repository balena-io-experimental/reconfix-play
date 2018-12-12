// error with imports
import * as React from "react";
import { mount } from "enzyme";
import { Link } from "rendition";

import Permalink from "../src/Permalink.tsx";

it("works when no text in the url", () => {
  window.history.pushState({}, "", "/");
  const decoded = Permalink.decode();
  expect(decoded).toBeNull();
});

it("decodes text from the url", () => {
  window.history.pushState({}, "", "/?yaml=sometext");
  const decoded = Permalink.decode();
  expect(decoded).toBe("sometext");
});

it("encodes text in the url", () => {
  const permalink = mount(<Permalink text={"some text"} />);
  expect(permalink.contains(<Link href={'?yaml=some%20text'} >permalink</Link>)).toBe(true);
});
