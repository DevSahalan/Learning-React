import React from "react";
import {countState} from "./index"
import {historyState} from "./index";
import {useRecoilState} from "recoil"
import { useRecoilValue } from "recoil";

function History() {
    const count = useRecoilValue()
  const [history, setHistory] = useRecoilState(historyState);
  return <div>
      {history.map(item)=>{
          <li> {item } </li>
      }}
  </div>;
}

export default History;
