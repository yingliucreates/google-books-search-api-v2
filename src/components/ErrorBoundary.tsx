import { Component } from "react";

class ErrorBoundary extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught an error", error, info);
  }
  render() {
    if (this.state.hasError) {
      return <h2>There was an error with this listing.</h2>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
