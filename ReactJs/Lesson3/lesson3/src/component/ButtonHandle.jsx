import React from 'react'

// export default function ButtonHandle(props) {
  export default function ButtonHandle({onChangeData}) {
  
  // hàm sử lí sự kiện
  const fnButton1 = () =>{
    alert('fn_button1')
  }
  function fnButton2(){
    alert('fn_button2')
  }
  const fnButton3 = (e) =>{
    alert(e)
  }
  // bắn event lên app
  const fnChangeData = () =>{
    // props.onChangeData('devmaster Academy')
    onChangeData('devmaster Academy')
  }
  return (
    <div>
      <h1>Handle Click</h1>
      {/* gọi func */}
      {/* <button className='btn btn-primary' onClick={fnButton1()}>Click me! 1</button>
      <button className='btn btn-primary' onClick={fnButton2()}>Click me! 2</button> */}
      <button className='btn btn-primary mx-5' onClick={fnButton1}>Click me! 3</button>
      <button className='btn btn-primary mx-5' onClick={() => fnButton3('nut 4')}>Click me! 4</button>
      <button className='btn btn-primary mx-5' onClick={fnChangeData}>Change Data App</button>
    </div>
  )
}
