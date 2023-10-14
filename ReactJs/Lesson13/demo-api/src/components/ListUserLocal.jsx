import axios from "../api/api-local";
import React, { useEffect, useState } from "react";

function ListUserLocal() {
  const [listUsers, setListUsers] = useState([]);
  // lấy dữ liệu từ api local
  const getAllUsers = async () => {
    let response = await axios.get("users");
    console.log(response.data);
    setListUsers(response.data);
  };
  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div>
      <h1>Danh sách user Local</h1>
      <hr />
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
                <td>{item.id}</td>
                <td>{item.userName}</td>
                <td>{item.password}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ListUserLocal;
