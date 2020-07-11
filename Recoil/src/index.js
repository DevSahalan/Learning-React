import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { RecoilRoot, atom } from "recoil";

export const countState = atom({
  key: "countState",
  default: 0,
});

export const historyState = atom({
  key: "historyState",
  default: [],
});

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
);
