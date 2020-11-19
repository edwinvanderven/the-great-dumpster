import React, {Component} from 'react';

import './Char.css';

class Char extends Component {
  render() {
    return (
      <div onClick={this.props.deleteChar} className="Char">
        {this.props.char}
      </div>
    );
  }
}

export default Char;