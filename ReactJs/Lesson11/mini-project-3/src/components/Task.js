import React from "react";

function Task({ renderTask, rollNo, onEdit,onDelete}) {
  //delete
  const handleDelete = (task) => {
    onDelete(task);
  };
  // Edit
  const handleEdit = (task) => {
    onEdit(true, "Update", task);
  };
  let elementLevel = <span className="label label-danger">High</span>;

  if (renderTask.level == 2) {
    elementLevel = <span className="label label-info">Medium</span>;
  } else if (renderTask.level == 1) {
    elementLevel = <span className="label label-default">Small</span>;
  }
  return (
    <tr>
      <td className="text-center">{rollNo}</td>
      <td>{renderTask.taskName}</td>
      <td className="text-center">{elementLevel}</td>
      <td>
        <button
          onClick={() => handleEdit(renderTask)}
          type="button"
          className="btn btn-warning"
        >
          Edit
        </button>
        <button
          onClick={() => handleDelete(renderTask)}
          type="button"
          className="btn btn-danger"
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default Task;
