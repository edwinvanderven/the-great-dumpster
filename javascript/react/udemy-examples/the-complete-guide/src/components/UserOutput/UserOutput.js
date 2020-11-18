import React from 'react'

function UserOutput(props) {
  const style = {
    padding: "10px",
    border: "1px solid grey"
  };

  return (
    <div style={style}>
      <p>First: {props.name}</p>
      <p>Second: {props.name}</p>
    </div>
  );
}

export default UserOutput;