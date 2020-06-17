import React, { createContext } from "react";
import "./App.css";
import ComponentA from "./ComponentA";

export const UserContext = React.createContext();
export const AgeContext = React.createContext();

function App() {
  return (
    <div className="App">
      <UserContext.Provider value={"myth"}>
        <AgeContext.Provider value={"23"}>
          <ComponentA />
        </AgeContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
