import React, { Component } from "react";

export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {hasError: false, errorMsg: ""};
    }

    static getDerivedStateFromError(error) {
        console.log("ErrorBoundary: getDerivedstateFromError", error);
        return { hasError: true, errorMsg: error.toString() };
    }

    componentDidCatch(error, errorInfo){
        console.log("ErrorBoundary: componentDidCatch", error,errorInfo);
    }

    render(){
        if (this.state.hasError) {
            return(
                <div>
                    <h2>Error Ocurred</h2>
                    <p>{this.state.errorMsg}</p>
                </div>
            )
        }
        return this.props.children;
    }
}