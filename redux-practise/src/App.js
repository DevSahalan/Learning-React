import React from "react";
import "./App.css";
import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import { changeName } from "./actions/myActions";

function App(props) {
  const data = useSelector((state) => {
    return state;
  });

  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>My name Is {data.name}</h1>
      <button onClick={() => dispatch(changeName("Lori"))}>Change Name</button>
    </div>
  );
}
// const mapStateToProps = (state) => {
//   console.log(state);

//   return {
//     myname: state.name,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     changename: (name) => {
//       dispatch({ type: "change-name", payload: name });
//     },
//   };
// };

export default App;
