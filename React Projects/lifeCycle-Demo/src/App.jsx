import React, { Component } from "react";
import Header from "./components/Header.jsx";
import Dashboard from "./components/Dashboard.jsx";
import './App.css'

export default class App extends Component {
  render(){
    return(
      <div className="App">
        <Header />
        <Dashboard />
      </div>
    );
  }
}
