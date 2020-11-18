import React, {Component} from 'react';

import './App.css';

import UserOutput from './components/UserOutput/UserOutput';
import UserInput from './components/UserInput/UserInput';

class App extends Component {
  state = {
    username: "Edwin"
  };

  changeUserName = (event) => {
    console.log('changing user name');
    this.setState({username: event.target.value});
  }

  render() {
    return (
      <div className="App">
        <UserInput changed={this.changeUserName} name={this.state.username}/>
        <UserOutput name={this.state.username}/>
        <UserOutput name={this.state.username}/>
      </div>
    )
  };
}

export default App;
