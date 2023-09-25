import React, { useState } from "react";
import data from "../data/dataTask";
function List() {
  const [listTasks, setListTasks] = useState(data);

  console.log(listTasks);
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
        <tbody>
          {listTasks.map((item) => (
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
                <button type="button" className="btn btn-warning mx-2">
                  Edit
                </button>
                <button type="button" className="btn btn-danger">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default List;
