import React from 'react'

function UserOutput(props) {
  const style = {
    marginTop: "10px",
    padding: "10px",
    border: "1px solid grey"
  };

  return (
    <div style={style}>
      <p>Textlength: {props.name.length}</p>
    </div>
  );
}

export default UserOutput;