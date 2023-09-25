import React from "react";
import Search from "./Search";
import AddTask from "./AddTask";
import Sort from "./Sort";

function Control() {
  return (
    <div className="row">
      <Search />
      <Sort />
      <AddTask />
    </div>
  );
}

export default Control;
