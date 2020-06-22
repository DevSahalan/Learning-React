import React, { useContext } from "react";
import { MyContext } from "./App2";

function ShowName2() {
  const data = useContext(MyContext);
  console.log("ShowName2 rendered");
  return (
    <div>
      <h2>{data.name} </h2>
      <button
        onClick={() =>
          data.changeName({ type: "change-name", payload: "Foxi" })
        }
      >
        Change Name
      </button>
    </div>
  );
}

export default ShowName2;
