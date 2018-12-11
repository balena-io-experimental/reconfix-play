import { ErrorInfo, ReactNode } from "react";
import * as React from "react";

interface WithChildren {
  children: ReactNode;
}

class ErrorBoundary extends React.Component<WithChildren> {
  state = {
    hasError: false
  };

  constructor(props: WithChildren) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.log("[error boundary] " + info + error);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
