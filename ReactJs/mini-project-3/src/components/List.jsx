import React, { useContext, useState } from "react";
import data from "../data/dataTask";
import { context } from "../hooks/useContext";
import Task from "./Task";
function List() {
  const { listTasks } = useContext(context);

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
            <Task key={item.id} item={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default List;
