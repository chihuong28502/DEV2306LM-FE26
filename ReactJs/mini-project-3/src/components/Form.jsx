import React, { useContext, useEffect, useState } from "react";
import { context } from "../hooks/useContext";
function Form() {
  const { setListTasks, listTasks } = useContext(context);
  const { nameBtn, setNameBtn } = useContext(context);
  const [name, setName] = useState("");
  const [level, setLevel] = useState("");
  const handleSubmitForm = () => {
    setListTasks((prev) => {
      return [
        ...prev,
        { id: listTasks.length + 1, taskName: name, level: level },
      ];
    });
  };

  return (
    <div className="col-md-offset-7 col-md-4">
      <form action="" method="POST" className="form-inline">
        <div className="form-group">
          <label className="sr-only" htmlFor="">
            label
          </label>
          <input
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
