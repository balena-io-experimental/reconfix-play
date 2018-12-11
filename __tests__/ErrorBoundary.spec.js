import * as React from "react";
import { shallow } from "enzyme";

import ErrorBoundary from "../src/ErrorBoundary.tsx";


it("swallow exceptions from children", () => {
  shallow(<ErrorBoundary> </ErrorBoundary>)
});
