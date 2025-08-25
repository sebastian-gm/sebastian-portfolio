import React from "react";

type State = { hasError: boolean; message?: string };

export default class ErrorBoundary extends React.Component<React.PropsWithChildren, State> {
  state: State = { hasError: false };
  static getDerivedStateFromError(err: unknown) {
    return { hasError: true, message: String(err) };
  }
  componentDidCatch(err: unknown, info: unknown) { console.error(err, info); }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: 24, color: "#f87171" }}>
          <h3>Component crashed</h3>
          <pre style={{ whiteSpace: "pre-wrap" }}>{this.state.message}</pre>
        </div>
      );
    }
    return this.props.children;
  }
}
