import { React, useEffect, useState } from "react";
import Title from "./components/Title.jsx";
import Control from "./components/Control.jsx";
import Form from "./components/Form.jsx";
import ListTask from "./components/ListTask.jsx";

function App() {
  const listTaskInit = [
    { taskId: 1, taskName: "Học lập trình frontend ", level: 1 },
    { taskId: 2, taskName: "Học lập trình C# ", level: 2 },
    { taskId: 3, taskName: "Lập trình với Frontend - Reactjs ", level: 3 },
    {
      taskId: 4,
      taskName: "Lập trình Fullstack (PHP, Java, NetCore_",
      level: 1,
    },
  ];
  const [tasks, setTasks] = useState(() => {
    const lists = JSON.parse(localStorage.getItem("DEV2308LM-REACTJS26"));
    if (lists === null || lists.length === 0) {
      return listTaskInit;
    }
    return lists;
  });
  // khi dữ liệu thay đổi , lưu newData vào LcStorage
  useEffect(() => {
    // lưu vào LcStorage
    localStorage.setItem("DEV2308LM-REACTJS26", JSON.stringify(tasks));
    setTasks(tasks);
  }, [tasks]);
  const [toggle, setToggle] = useState(false);
  // task : add , edit
  let initTask = { taskId: 0, taskName: "", level: 2 };
  const [task, setTask] = useState(initTask); // state of form
  const [actionName, setActionName] = useState("Save"); // name btn form (save(add) ; update(edit))

  // xử lí sự kiện add & edit task
  const handleAddOrEditTask = (toggle, actionName, task) => {
    setToggle(toggle);
    setActionName(actionName);
    if (task === null) {
      setTask(initTask);
    } else {
      setTask(task);
    }
  };
  // hàm xử lí cancel
  const handleCancel = (toggle) => {
    setToggle(toggle);
  };
  // handle Edit  => Task =>
  const handleSubmit = (toggle, actionName, task) => {
    setToggle(toggle);
    if (actionName == "Save") {
      let id = tasks[tasks.length - 1].taskId;
      id++;
      let taskAdd = {
        taskId: id,
        taskName: task.taskName,
        level: task.level,
      };
      setTasks([...tasks, taskAdd]);
    } else {
      // tìm id cần sửa sau đó update
      for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].taskId === task.taskId) {
          tasks[i] = task;
          break;
        }
      }
      setTasks([...tasks]);
    }
  };
  // form Component
  let elementForm =
    toggle === true ? (
      <Form
        onSubmit={handleSubmit}
        renderTasks={tasks}
        renderTask={task}
        actionName={actionName}
        onCancel={handleCancel}
      />
    ) : (
      ""
    );
  //  hàm xử lí submit
  const handleDelete = (task) => {
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].taskId === task.taskId) {
        tasks.splice(i, 1);
        break;
      }
    }
    setTasks([...tasks]);

    console.log(tasks);
  };
  return (
    <div className="container">
      {/* TITLE : START */}
      <Title />
      {/* TITLE : END */}
      {/* CONTROL (SEARCH + SORT + ADD) : START */}
      <Control onAddTask={handleAddOrEditTask} />
      {/* CONTROL (SEARCH + SORT + ADD) : END */}
      {/* FORM : START */}
      {elementForm}
      {/* FORM : END */}
      {/* LIST : START */}
      <ListTask
        onDelete={handleDelete}
        onEdit={handleAddOrEditTask}
        renderTasks={tasks}
      />
    </div>
  );
}

export default App;
