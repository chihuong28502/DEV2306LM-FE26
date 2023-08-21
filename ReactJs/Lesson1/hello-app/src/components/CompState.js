import React, { Component } from 'react';

class CompState extends Component {
  constructor(props){
    super(props);
    // quản lí dữ liệu qua state
    this.state = {
      studentId:123,
      name:'Name1',
      age: 123
    };
  }
  handleChange =()=>{
    this.setState({
      name: 'thaydoi'
    })

  }
  render() {
    return (
      <div>
        <h2>Sử dụng data trong state</h2>
        <div className='alert alert-danger'>
          <p>Thông tin sinh viên:</p>
          <p>ID: {this.state.studentId}</p>
          <p>name: {this.state.name}</p>
          <p>age: {this.state.age}</p>
          <button onClick={this.handleChange} >thay</button>
        </div>
      </div>
    );
  }
}

export default CompState;