import React, { useReducer, useContext } from "react";
import CounterItem from "./CounterItem";

export const CountValue = React.createContext();

const reducer = (count, action) => {
  switch (action.type) {
    case "increment":
      return count + 1;
    case "decrement":
      return count - 1;
    default:
      return count;
  }
};
function Counter() {
  const [count, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <CountValue.Provider value={count}>
        <CounterItem />
      </CountValue.Provider>

      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
    </div>
  );
}

export default Counter;
