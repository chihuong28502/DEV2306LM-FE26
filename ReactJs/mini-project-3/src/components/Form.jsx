import React, { useContext, useEffect } from "react";
import { context } from "../hooks/useContext";
function Form() {
  let { setListTasks, listTasks } = useContext(context);
  const { nameBtn, task } = useContext(context);
  const { name, setName } = useContext(context);
  const { level, setLevel } = useContext(context);
  const handleSubmitForm = () => {
    if (nameBtn === "Submit" || nameBtn === "Add Task") {
      setListTasks((prev) => {
        // addz
        return [
          ...prev,
          { id: listTasks.length + 1, taskName: name, level: level },
        ];
      });
      setName("");
    } else if (nameBtn === "Update") {
      // edit
      for (let i = 0; i < listTasks.length; i++) {
        if (listTasks[i].id === task.id) {
          listTasks[i].taskName = name;
          setName(task.name);
          listTasks[i].level = level;
          setLevel(task.level);
        }
      }
    }
  };
  useEffect(() => {
    // set name cho o input
    if (nameBtn === "Update") {
      setName(task.taskName);
      setLevel(task.level);
    }
  }, [task, setLevel, setName, nameBtn]);

  return (
    <div className="col-md-offset-7 col-md-4">
      <form action="" method="POST" className="form-inline">
        <div className="form-group">
          <label className="sr-only" htmlFor="">
            label
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="form-control"
            placeholder="Task Name"
          />
        </div>
        <div className="form-group">
          <label className="sr-only" htmlFor="">
            label
          </label>
          <select
            value={level}
            onChange={(e) => setLevel(parseInt(e.target.value))}
            name="ds"
            id="inputDs"
            className="form-control mx-2"
            required="required"
          >
            <option value={0}>Small</option>
            <option value={1}>Medium</option>
            <option value={2}>High</option>
          </select>
        </div>
        <button
          onClick={handleSubmitForm}
          type="button"
          className="btn btn-primary "
        >
          {nameBtn}
        </button>
        <button type="button" className="btn btn-default my-2">
          Cancel
        </button>
      </form>
    </div>
  );
}

export default Form;
