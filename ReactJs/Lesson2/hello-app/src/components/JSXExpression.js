// 1 import các hàm cần dùng
import React from "react";
// 2 xây dựng func component
function JSXExpression(){

  const user = {
    name: 'Name1',
    age: 45
  }
  const formatName = (user) => <h2>xin chào2 {user.name}- tuoi {user.age}</h2>
  // khai báo biến
  const name = 'devmaster.edu.vn';
  const element = (
    <>
      <h1>Xin chào dev master element</h1>
    </>
  )
  return(
    <div>
      <h2>Component Demo JSX Expression</h2>
      <hr />
      {formatName(user)}
      <h3>xin chào {name}</h3>
      <p>xin chào {user.name} - tuổi của bạn: {user.age}</p>
      {element}
    </div>
  )
}

export default JSXExpression;

// 3 export dể dùng chỗ cần thiết
