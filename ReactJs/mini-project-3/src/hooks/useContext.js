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
  const [getSearch, setGetSearch] = useState("");
  const [sort, setSort] = useState("");

  // //function
  // function GetTokenFromLocalStorage(key) {
  //   return localStorage.getItem(key);
  // }
  // function SaveTokenToLocalStorage(title, value) {
  //   localStorage.setItem(title, value);
  // }
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
    getSearch,
    setGetSearch,
    sort,
    setSort,
  };
  return <context.Provider value={value}>{children}</context.Provider>;
};

export default ContextProvider;
