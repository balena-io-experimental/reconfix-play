import * as React from "react";
import { shallow } from "enzyme";

import ErrorBoundary from "../src/ErrorBoundary.tsx";

import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

it("swallow exceptions from children", () => {
  Enzyme.configure({ adapter: new Adapter() });
  shallow(<ErrorBoundary> </ErrorBoundary>)
});
