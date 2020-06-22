import React from "react";

function title() {
  console.log("rendering title");

  return (
    <div>
      <h2>Memo and Callback</h2>
    </div>
  );
}

export default React.memo(title);
