import React, { Component } from "react";
import Counter from "./Counter.jsx";
import ScrollingList from "./ScrollingList.jsx";
import ErrorBoundary from "./ErrorBoundary.jsx";

export default class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = { showCounter: true, showList: true};
    }

    toggleCounter = () => {
        this.setState((prevState) => ({ showCounter: !prevState.showCounter }));
    };

    toggleList = () => {
        this.setState((prevState) => ({ showList: !prevState.showList }));
    };

    render() {
        return (
            <div className="dashboard">
                <div className="controls">
                <button onClick={this.toggleCounter}>
                    {this.state.showCounter ? "UnMount Counter" : "Mount Counter"}
                </button>
                <button onClick={this.toggleList}>
                    {this.state.showList ? "Unmount List" : "Mount List"}
                </button>
                </div>
                <ErrorBoundary>{this.state.showCounter && <Counter/>}</ErrorBoundary>
                <ErrorBoundary>{this.state.showList && <ScrollingList/>}</ErrorBoundary>
            </div>
        )
    }
}