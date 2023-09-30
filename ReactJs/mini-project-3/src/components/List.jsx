import React, { useContext } from "react";
import { context } from "../hooks/useContext";
import Task from "./Task";
function List() {
  const { sort, getSearch } = useContext(context);
  let { listTasks } = useContext(context);

  console.log("123");
  // search
  if (getSearch !== "") {
    listTasks = listTasks.filter((x) =>
      x.taskName.toLocaleLowerCase().includes(getSearch.toLocaleLowerCase())
    );
  }
  // sort
  if (sort !== "" || sort !== undefined) {
    let arr = sort.split("-");
    if (arr[0] === "name") {
      if (arr[1] === "ASC") {
        listTasks.sort((x, y) => {
          return x.taskName.localeCompare(y.taskName);
        });
      } else {
        listTasks.sort((x, y) => {
          return y.taskName.localeCompare(x.taskName);
        });
      }
    } else {
      if (arr[1] === "ASC") {
        listTasks.sort((x, y) => {
          return x.level - y.level;
        });
      } else {
        listTasks.sort((x, y) => {
          return y.level - x.level;
        });
      }
    }
  }
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
