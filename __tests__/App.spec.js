import * as React from "react";
import { mount } from "enzyme";

import App from '../src/App.js';

it("fill in yaml from url", async () => {
  window.history.pushState(
    {},
    "",
    "?yaml=version%3A 1%0Aproperties%3A%20%0A - a%3A%0A%20%20%20 type%3A string"
  );
  const app = await mount(<App />);
  const html = app.html();
  expect(html).toContain('version: 1');
  expect(html).toContain('type: string');
});
