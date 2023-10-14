import React, { useEffect, useState } from "react";
import axios from "../api/api-xm";
function ListCategory() {
  //useState
  const [categories, setCategories] = useState([]);
  // get data
  const getAllData = async () => {
    const repone = await axios.get("/api/Categories");

    console.log(repone.data);
    setCategories(repone.data);
  };
  //useEffect
  useEffect(() => {
    getAllData();
  }, []);
  return (
    <div>
      <h1>List Categories</h1>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>title</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((item) => {
            return (
              <tr>
                <td>{item.id}</td>
                <td>{item.title}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ListCategory;
