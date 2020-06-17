import React from "react";
import { useParams } from "react-router";

function User(props) {
  const { firstname, lastname } = useParams();
  return (
    <div>
      <h2>
        welcome {firstname} {lastname}{" "}
      </h2>
    </div>
  );
}

export default User;
