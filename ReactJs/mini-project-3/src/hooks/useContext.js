import { createContext, useState } from "react";
import data from "../data/dataTask";
export const context = createContext();

const ContextProvider = ({ children }) => {
  //State
  const [listTasks, setListTasks] = useState(data);
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
  };
  return <context.Provider value={value}>{children}</context.Provider>;
};

export default ContextProvider;
