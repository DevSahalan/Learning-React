import React from "react";
import { countState, historyState} from "./index";
import { useRecoilValue, useSetRecoilState, useRecoilState} from "recoil";



function Controller() {
  // const [count, setCount] = useRecoilState(countState);
  const count = useRecoilValue(countState)
  const setCount = useSetRecoilState(countState)
  const setHistory = useSetRecoilState(historyState);
  const history = useRecoilValue(historyState);
  

  const inc = () => {
    setCount(count + 1);
    setHistory((prev) => [...prev, "incremented by 1"]);
  };
  const dec = () => {
    setCount(count - 1);
    setHistory((prev) => [...prev, "deccremented by 1"]);
  };
  return (
    <div>
      <button onClick={inc}>Increment</button>
      <button onClick={dec}>Decrement</button>
      <ul>
        {history.map((item) => (
          <li> {item} current value : {count}</li>
        ))}
      </ul>
    </div>
  );
}

export default Controller;
