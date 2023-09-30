import { React, useState } from "react";
import Title from "./components/Title.jsx";
import Control from "./components/Control.jsx";
import Form from "./components/Form.jsx";
import ListTask from "./components/ListTask.jsx";

function App() {
  const listTaskInit = [
    {
      taskId: 1,
      taskName: "task1",
      level: 1,
    },
    {
      taskId: 2,
      taskName: "task2",
      level: 2,
    },
    {
      taskId: 3,
      taskName: "task3",
      level: 3,
    },
  ];
  const [tasks, setTasks] = useState(() => {
    return listTaskInit;
  });
  const [toggle, setToggle] = useState(false);
  let elementForm = toggle === true ? <Form /> : "";
  return (
    <div className="container">
      {/* TITLE : START */}
      <Title />
      {/* TITLE : END */}
      {/* CONTROL (SEARCH + SORT + ADD) : START */}
      <Control />
      {/* CONTROL (SEARCH + SORT + ADD) : END */}
      {/* FORM : START */}
      {elementForm}
      {/* FORM : END */}
      {/* LIST : START */}
      <ListTask renderTasks={tasks} />
    </div>
  );
}

export default App;
