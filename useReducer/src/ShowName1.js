import React, { useContext } from "react";
import { MyContext } from "./App2";

function ShowName1() {
  const data = useContext(MyContext);

  console.log("ShowName1 rendered");

  return (
    <div>
      <h2>{data.name} </h2>
      <button
        onClick={() =>
          data.changeName({ type: "change-name", payload: "Myth" })
        }
      >
        Change Name
      </button>
    </div>
  );
}

export default ShowName1;
