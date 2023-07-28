import React from "react";

function InputArea(props) {
  return (
    <div className="form">
      <input onChange={props.onchange} type="text" value={props.value} />
      <button onClick={props.onclick} style={{ cursor: "pointer" }}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
