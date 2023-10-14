import React, { useEffect, useState } from "react";
import axios from "../api/api-sever";
function ListUserSever() {
  const [listUsers, setListUsers] = useState([]);
  const [getUser, setGetUser] = useState({});
  // lấy dữ liệu từ api local
  const getAllUsers = async () => {
    let response = await axios.get("users");
    setListUsers(() => {
      return response.data;
    });
  };
  // useEffect(() => {
  //   localStorage.setItem("DEV2308LM-REACTJS26", JSON.stringify(listUsers));
  //   setListUsers(listUsers);
  // }, [listUsers]);

  useEffect(() => {
    getAllUsers();
  }, []);
  // const handleClick = async (item) => {
  //   let response = await axios.get("users/" + item.id);
  //   setGetUser(response.data);
  // };

  console.log(getUser);
  return (
    <div>
      <h1>Danh sách user sever</h1>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>username</th>
            <th>pass</th>
          </tr>
        </thead>
        <tbody>
          {listUsers.map((item, index) => {
            return (
              <tr>
                <td>
                  <button>edit</button>
                </td>
                <td>{item.id}</td>
                <td>{item.userName}</td>
                <td>{item.password}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <hr />
    </div>
  );
}

export default ListUserSever;
