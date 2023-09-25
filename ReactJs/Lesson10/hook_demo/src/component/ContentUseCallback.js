import React, { useCallback, useState } from "react";
import DemoUseCallback from "./DemoUseCallback";
function ContentUseCallback() {
  const [count, setCount] = useState(0);
  const handleUp = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);
  return (
    <div>
      <DemoUseCallback onUp={handleUp}></DemoUseCallback>
      <h2>{count}</h2>
    </div>
  );
}

export default ContentUseCallback;
