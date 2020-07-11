import React from "react";
import { useRecoilValue } from "recoil";
import Controller from "./Controller";
// import History from "./History";
import { countState } from "./index";

function Counter() {
  const count = useRecoilValue(countState);
  return (
    <div>
      <h2> Count :{count} </h2>
      <Controller />
      {/* <History /> */}
    </div>
  );
}

export default Counter;
