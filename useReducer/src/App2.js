import React, { useReducer } from "react";
import ShowName1 from "./ShowName1";
import ShowName2 from "./ShowName2";
import ShowName3 from "./ShowName3";

export const MyContext = React.createContext();

function reducer(name, action) {
  switch (action.type) {
    case "change-name":
      return {
        name: action.payload,
      };
    default:
      return name;
  }
}
function App2() {
  const initialName = { name: "lori" };
  const [data, dispatch] = useReducer(reducer, initialName);
  return (
    <MyContext.Provider value={{ name: data.name, changeName: dispatch }}>
      <div>
        <ShowName1 />
        <ShowName2 />
        <ShowName3 />
      </div>
    </MyContext.Provider>
  );
}

export default App2;
