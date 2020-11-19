import React, { Component } from 'react';
import Char from '../Char/Char';

import './Validation.css';

class Validation extends Component {
  minimalLength = 5;

  render() {
    const text = this.props.name;
    const paragraph = text.length < this.minimalLength ? 
                      <p>Text too short</p> :
                      <p>Text long enough</p>

    const chars = text.split('').map((char, index) => {
      return (
        <Char 
          char={char} 
          key={index}
          deleteChar={(event) => this.props.deleteChar(event, index)}
        />
      );
    });

    return (
      <div className="Validation">
        {paragraph}
        {chars}
      </div>
    );
  }
}

export default Validation;