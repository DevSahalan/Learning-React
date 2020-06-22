import React, { useContext } from "react";
import { MyContext } from "./App2";

function ShowName3() {
  const data = useContext(MyContext);
  console.log("ShowName3 rendered");
  return (
    <div>
      <h2>{data.name} </h2>
      <button
        onClick={() =>
          data.changeName({ type: "change-name", payload: "Amina" })
        }
      >
        Change Name
      </button>
    </div>
  );
}

export default ShowName3;
