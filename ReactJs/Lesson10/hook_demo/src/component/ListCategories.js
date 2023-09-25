import React, { useEffect, useState } from "react";
import categories from "./dataCategories";
function ListCategories() {
  // khởi tạo với list student

  const [list, setList] = useState(categories);
  useEffect(() => {
    setList(categories);
  }, []);
  // render ra danh sách
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>icon</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.icon}</td>
              <td>{item.metaDescription}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListCategories;
