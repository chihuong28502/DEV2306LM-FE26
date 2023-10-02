import React from "react";
import Task from "./Task";

function ListTask({ renderTasks, onEdit,onDelete }) {
  //delete t
  const handleDelete = (task)=>{
    onDelete(task);
  }
  // edit get props task
  const handleEdit = (toggle, actionName, task) => {
    onEdit(toggle, actionName, task);
  };
  let elementTask = renderTasks.map((item, index) => {
    return (
      <Task
      onDelete = {handleDelete}
        onEdit={handleEdit}
        key={item.taskId}
        renderTask={item}
        rollNo={index + 1}
      />
    );
  });
  return (
    <div className="panel panel-success">
      <div className="panel-heading">List Task</div>
      <table className="table table-hover ">
        <thead>
          <tr>
            <th style={{ width: "10%" }} className="text-center">
              #
            </th>
            <th>Task</th>
            <th style={{ width: "20%" }} className="text-center">
              Level
            </th>
            <th style={{ width: "20%" }}>Action</th>
          </tr>
        </thead>
        <tbody>{elementTask}</tbody>
      </table>
    </div>
  );
}

export default ListTask;
