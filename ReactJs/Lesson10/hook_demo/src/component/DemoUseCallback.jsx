import React, { memo } from "react";

function DemoUseCallback({ onUp }) {
  console.log("render");
  return (
    <div>
      <h1>CHào cả nhà</h1>
      <button onClick={onUp}>Click here</button>
    </div>
  );
}

export default memo(DemoUseCallback);
