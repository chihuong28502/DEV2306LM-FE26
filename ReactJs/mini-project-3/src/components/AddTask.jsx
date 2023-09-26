import React, { useContext } from "react";
import { context } from "../hooks/useContext";

function AddTask() {
  const { setNameBtn, setLevel, setName } = useContext(context);
  const handleClickAddTask = () => {
    setName("");
    setLevel(0);
    setNameBtn("Add Task");
  };
  return (
    <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
      <button
        onClick={handleClickAddTask}
        type="button"
        className="btn btn-info btn-block"
      >
        Add Task
      </button>
    </div>
  );
}

export default AddTask;
