import React, { Component } from "react";
import "./App.css";

import ValidationComponent from "./ValidationComponent/ValidationComponent";
import CharComponent from "./CharComponent/CharComponent";

class App extends Component {
  state = {
    textInput: "",
  };

  inputLengthHandler = (event) => {
    let text = event.target.value;
    this.setState({ textInput: text });
  };

  deleteCharHandler = (index) => {
    let text = this.state.textInput.split("");
    text.splice(index, 1);
    let newText = text.join("");
    this.setState({ textInput: newText });
  };

  render() {
    const charList = this.state.textInput.split("").map((el, index) => {
      return (
        <CharComponent
          char={el}
          key={index}
          delete={() => this.deleteCharHandler(index)}
        />
      );
    });

    return (
      <div className="App">
        <input
          type="text"
          onChange={this.inputLengthHandler}
          value={this.state.textInput}
        />
        <p>{this.state.textInput}</p>
        <ValidationComponent length={this.state.textInput.length} />
        {charList}
      </div>
    );
  }
}
export default App;
