import React from 'react'

function FuncCompDemo(props) {
  return (
    <div>
      <h2>FuncCompDemo</h2>
      <div className='alert alert-secondary'>
        <h3>truy cap toi cac thuoc tinh cua FuncCompDemo</h3>
        <p>Welcome to, {props.name}</p>
        <p>Welcome to, {props.address}</p>
        <p>Welcome to, {props.company}</p>
      </div>
    </div>
  )
}

export default FuncCompDemo
