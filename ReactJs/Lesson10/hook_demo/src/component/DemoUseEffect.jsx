import React, { useEffect, useState } from "react";

function DemoUseEffect() {
  // dùng effect 1 tham số callback
  useEffect(() => {
    console.log("đây là callback func trong useEffect");
  });
  // re-render
  const [count, setCount] = useState(1);
  const handleCount = () => {
    setCount((prev) => prev + 1);
    setList([...list, Math.random().toFixed(1)]);
  };
  // dùng use effect tham số thứ 2 là [] thực hiện duy nhất 1 lần khi component mount
  useEffect(() => {
    console.log("tham số []");
  }, []);
  //  dùng use effect tham số thứ 3 là [deps] thực hiện khi deps thay đổi
  const [list, setList] = useState([10, 20]);

  useEffect(() => {
    console.log("[deps]");
  }, [list]);
  return (
    <div>
      <h2>demo useEffect</h2>
      <p>{count}</p>
      <button onClick={handleCount}>click</button>
    </div>
  );
}

export default DemoUseEffect;
