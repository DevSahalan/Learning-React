import React from "react";

function Counter(props) {
  console.log(`${props.text} counter is rendered`);

  return (
    <div>
      <h2> {props.counter} </h2>
    </div>
  );
}

export default React.memo(Counter);
