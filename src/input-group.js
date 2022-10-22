import React from "react";
const InputGroup = (props) => {
  return (
    <span className={props.className} style={props.style}>
      <label className="p-1">{props.label}</label>
      <input
        onChange={props.onChange}
        type="text"
        value={props.value}
      />
    </span>
  );
};

export default InputGroup; 