import { Component, ReactNode } from "react";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: false;
}

class CustomErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  state: ErrorBoundaryState;

  constructor(props: ErrorBoundaryProps) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(err: Error) {
    console.log(`Error: ${err}`);
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h1>에러 발생</h1>;
    }

    return this.props.children;
  }
}

export default CustomErrorBoundary;
