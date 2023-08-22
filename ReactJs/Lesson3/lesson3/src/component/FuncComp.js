import React from 'react'

export default function FuncComp(props) {
  return (
    <div>
      <h2>Demo FuncComp</h2>
      <h3>
        lấy dữ liệu từ props
      </h3>
      <p>naame: {props.name}</p>
      <p>age: {props.age}</p>
    </div>
  )
}
