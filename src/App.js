import React, { Component } from "react";
import Palette from "./Palette";
import Page from "./Page";
import seedColors from "./seedColors";
import Form from './Form';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { palettes: seedColors };
  }

  render() {
    return (
      <div className = "Palette">
        <Form />
        <Palette {...seedColors[1]} />
      </div>
    )
  }
}

export default App;
