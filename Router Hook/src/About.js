import React from "react";
import { useLocation, useHistory } from "react-router";

function About() {
  const location = useLocation();
  const history = useHistory();
  console.log(location);
  console.log(location.state.from);
  const goBackHandler = () => {
    history.goBack();
  };
  return (
    <div>
      <h2>path : {location.pathname}</h2>
      <h2>From : {location.state.from}</h2>
      <button onClick={goBackHandler}>Go Back</button>
    </div>
  );
}

export default About;
