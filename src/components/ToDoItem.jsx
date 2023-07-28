import React from "react";

function ToDoItem(props) {
  return (
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li
        style={{
          cursor: "pointer",
          wordWrap: "break-word",
          wordBreak: "break-all"
        }}
      >
        {props.text}
      </li>
    </div>
  );
}

export default ToDoItem;
