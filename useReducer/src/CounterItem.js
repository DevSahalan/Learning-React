import React from "react";
import { CountValue } from "./Counter";
import { useContext } from "react";

function CounterItem() {
  const count = useContext(CountValue);
  return <div>Count : {count}</div>;
}

export default CounterItem;
