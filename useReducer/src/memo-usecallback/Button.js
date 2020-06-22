import React from "react";

function Button(props) {
  console.log(`${props.text} button is rendered`);

  return (
    <div>
      <button onClick={props.handleIncreament}>increase {props.text}</button>
    </div>
  );
}

export default React.memo(Button);
