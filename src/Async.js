import React, { Component } from "react";

// load given React component asynchronously, needed for WASM
const asyncComponent = importComponent => {
  return class extends Component {
    displayName = importComponent;

    state = {
      component: null
    };

    componentDidMount() {
      importComponent().then(cmp => {
        this.setState({ component: cmp.default });
      });
    }

    render() {
      const C = this.state.component;
      return C ? <C {...this.props} /> : null;
    }
  };
};

export default asyncComponent;
