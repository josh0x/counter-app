import React from "react";

function Count() {
  let countNum = 0;
  return (
    <div>
      <h1>{countNum}</h1>
      <button>+</button>
      <button>-</button>
      <button>Reset</button>
    </div>
  );
}

export default Count;
