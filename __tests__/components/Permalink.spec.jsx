import * as React from "react";
import { shallow } from "enzyme";
import { Link } from "rendition";

import Permalink from "../../src/Permalink";

it("works when no text in the url", () => {
  window.history.pushState({}, "", "/");
  const decoded = Permalink.decode();
  expect(decoded).toBeNull();
});

it("decodes text from the url", () => {
  const text = "some text"
  window.history.pushState({}, "", `/?yaml=${Permalink.encode(text)`);
  const decoded = Permalink.decode();
  expect(decoded).toBe(text);
});

it("encodes text in the url", () => {
  const text = "some text"
  const permalink = shallow(<Permalink text={text} />);
  expect(permalink.contains(<Link href={`?yaml=${Permalink.encode(text)}`} >permalink</Link>)).toBe(true);
});
