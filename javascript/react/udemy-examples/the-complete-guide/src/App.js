import React, {Component} from 'react';

import './App.css';

// import UserOutput from './components/UserOutput/UserOutput';
import Validation from './components/Validation/Validation';

import UserInput from './components/UserInput/UserInput';

class App extends Component {
  state = {
    text: "placeholder"
  };

  changeUserName = (event) => {
    this.setState({text: event.target.value});
  }

  deleteChar = (event, index) => {
    const text = this.state.text;
    const textArray = text.split('');
    textArray.splice(index, 1);
    this.setState({text: textArray.join('')})
  }

  render() {
    return (
      <div className="App">
        <UserInput changed={this.changeUserName} name={this.state.text}/>
        <Validation name={this.state.text} deleteChar={(event, index) => this.deleteChar(event, index)}/>
      </div>
    )
  };
}

export default App;
