import React, { useState } from "react";

function DemoUseState() {
  const lists = ["a", "b", "c", "d"];
  const [count, setCount] = useState(10);
  const [list, setList] = useState(lists);
  const handleUp = () => {
    setCount((prev) => prev + 1);
  };
  const handleAdd = () => {
    setList([...list, Math.random().toFixed(1)]);
  };
  return (
    <div className="">
      <div className="alert alert-primary">
        <h2>Demo useState trong React Hook</h2>
        <p>Count: {count}</p>
        <button onClick={handleUp}>Up Count</button>
      </div>
      <div className="bg-light">
        <p>List: {list.toString()}</p>
        <button onClick={handleAdd}>add random number</button>
      </div>
    </div>
  );
}

export default DemoUseState;
