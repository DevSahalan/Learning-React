import React, { useContext } from "react";
import ComponentB from "./ComponentC";
import { UserContext, AgeContext } from "./App";

function ComponentC() {
  const user = useContext(UserContext);
  const age = useContext(AgeContext);
  return (
    <div>
      <h2>
        i am {user} and {age} years old
      </h2>
    </div>
  );
}

export default ComponentC;
