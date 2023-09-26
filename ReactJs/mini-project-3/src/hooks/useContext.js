import { createContext, useState } from "react";
import data from "../data/dataTask";
export const context = createContext();

const ContextProvider = ({ children }) => {
  //State
  const [name, setName] = useState("");
  const [level, setLevel] = useState("");
  const [listTasks, setListTasks] = useState(data);
  const [task, setTask] = useState();
  const [nameBtn, setNameBtn] = useState("Submit");
  //function
  function GetTokenFromLocalStorage(key) {
    return localStorage.getItem(key);
  }
  function SaveTokenToLocalStorage(title, token) {
    localStorage.setItem(title, token);
  }
  //Value
  const value = {
    listTasks,
    setListTasks,
    nameBtn,
    setNameBtn,
    task,
    setTask,
    name,
    setName,
    level,
    setLevel,
  };
  return <context.Provider value={value}>{children}</context.Provider>;
};

export default ContextProvider;
