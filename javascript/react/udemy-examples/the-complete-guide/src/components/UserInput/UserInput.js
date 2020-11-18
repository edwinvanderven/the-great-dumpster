import React from 'react'

import './UserInput.css';

function UserInput(props) {
  return (
    <input className="UserInput" type="text" onChange={props.changed} value={props.name} />
  );
}

export default UserInput;