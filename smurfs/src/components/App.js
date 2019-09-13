import React, { Component } from "react";
import "./App.css";
import SmurfsGet from "./SmurfsGet";
import SmurfsAddForm from "./SmurfsAddForm";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
          <SmurfsGet/>
          <SmurfsAddForm/>
      </div>
    );
  }
}

export default App;
