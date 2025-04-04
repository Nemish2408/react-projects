import React, { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, error: false, isPaused: false };
    console.log("Counter: constructor");
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("Counter: getDerivedStateFromProps", nextProps, prevState);
    return null;
  }

  componentDidMount() {
    console.log("Counter: componentDidMount");
    this.startCounter();
  }

  startCounter = () => {

    this.interval = setInterval(() => {
      this.setState((prevState) => ({ count: prevState.count + 1 }));
    }, 3000);
  };

  pauseCounter = () => {
    console.log("Counter: Pausing counter");
    clearInterval(this.interval);
    this.setState({ isPaused: true });
  };

  resumeCounter = () => {
    console.log("Counter: Resuming counter");

    if (this.state.isPaused) {
      this.startCounter();
      this.setState({ isPaused: false });
    }
  };

  shouldComponentUpdate(nextProps, nextState) {
    console.log("Counter: shouldComponentUpdate", nextProps, nextState);
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("Counter: getSnapshotBeforeUpdate", prevProps, prevState);
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("Counter: componentDidUpdate", prevProps, prevState, snapshot);
  }

  componentWillUnmount() {
    console.log("Counter: componentWillUnmount");
    clearInterval(this.interval);
  }


  triggerError = () => {
    this.setState({ error: true });
  };


  forceCounterUpdate = () => {
    this.forceUpdate(() => {
      console.log("Counter: forceUpdate callback");
    });
  };

  render() {
    console.log("Counter: render");
    if (this.state.error) {
      throw new Error("Simulated error in Counter component!");
    }
    return (
      <div className="component-box">
        <h2>Counter Component</h2>
        <p>Count: {this.state.count}</p>
        <button onClick={this.triggerError}>Trigger Error</button>
        <button onClick={this.forceCounterUpdate}>Force Update</button>
        {this.state.isPaused ? (
          <button onClick={this.resumeCounter}>Resume</button>
        ) : (
          <button onClick={this.pauseCounter}>Pause</button>
        )}
      </div>
    );
  }
}
