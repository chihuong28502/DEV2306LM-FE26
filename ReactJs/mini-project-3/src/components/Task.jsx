import React, { useContext } from "react";
import { context } from "../hooks/useContext";

function Task({ item }) {
  let { listTasks } = useContext(context);
  const { setNameBtn, setListTasks, setTask } = useContext(context);
  const handleEdit = (e) => {
    setNameBtn("Update");
    for (let i = 0; i < listTasks.length; i++) {
      if (listTasks[i].id === item.id) {
        setTask(listTasks[i]);
      }
    }
  };
  const handleDelete = () => {
    for (let i = 0; i < listTasks.length; i++) {
      if (listTasks[i].id === item.id) {
        listTasks = listTasks.filter((element) => element.id !== item.id);
        setListTasks(listTasks);
      }
    }
  };
  return (
    <tr key={item.id}>
      <td className="text-center">{item.id}</td>
      <td>{item.taskName}</td>
      <td className="text-center">
        {parseInt(item.level) === 1 ? (
          <span className="label label-info">Medium</span>
        ) : parseInt(item.level) === 2 ? (
          <span className="label label-danger">High</span>
        ) : (
          <span className="label label-default">Small</span>
        )}
      </td>
      <td>
        <button
          onClick={handleEdit}
          type="button"
          className="btn btn-warning mx-2"
        >
          Edit
        </button>
        <button onClick={handleDelete} type="button" className="btn btn-danger">
          Delete
        </button>
      </td>
    </tr>
  );
}

export default Task;
