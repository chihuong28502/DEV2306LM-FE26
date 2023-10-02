import React, { useState, useEffect } from "react";

function Form({ onSubmit, onCancel, actionName, renderTask, renderTasks }) {
  // cancel
  const handleCancel = () => {
    onCancel(false);
  };

  // state in form
  const [task, setTask] = useState(renderTask);
  const [saveUpdate, setActionName] = useState(actionName);
  // change in control => update state
  const handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setTask((task) => {
      return {
        ...task,
        [name]: value,
      };
    });
  };
  // khi component form đẫ mouting khi renderTask thay đổi
  useEffect(() => {
    setTask(renderTask);
  }, [renderTask]);
  // hàm xử lí sự kiện Submit Form
  const handleSubmit = (event) => {
    onSubmit(true, actionName, task);
  };

  return (
    <div className="row">
      <div className="col-md-offset-7 col-md-5">
        <form action="" method="POST" className="form-inline">
          <div className="form-group">
            <label className="sr-only" htmlFor="">
              label
            </label>
            <input
              name="taskName"
              value={task.taskName || ""}
              type="text"
              className="form-control"
              placeholder="Task Name"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label className="sr-only" htmlFor="">
              label
            </label>
            <select
              onChange={handleChange}
              name="level"
              id="inputDs"
              className="form-control"
              required="required"
              value={task.level || 1}
            >
              <option value={1}>Small</option>
              <option value={2}>Medium</option>
              <option value={3}>High</option>
            </select>
          </div>
          <button
            onClick={handleSubmit}
            type="button"
            className="btn btn-primary"
          >
            {actionName}
          </button>
          <button
            onClick={handleCancel}
            type="button"
            className="btn btn-default"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
