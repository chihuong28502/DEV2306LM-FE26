import React, { Component } from 'react';

class ClassComp extends Component {
  constructor (props) {
    super(props);
    this.state = {
      arr:[12,11,21,121],
      name: 'devmaster',
      age : 6
    };
  }
  render() {
    return (
      <div>
        <h2>Demo ClassComp</h2>
        <div>
          <h3>Truy cập dữ liêu từ props</h3>
          <p>name: {this.props.name}</p>
          <p>age: {this.props.age}</p>
          <p>lấy trong state</p>
          <p>arr{this.state.arr}</p>
          <p>name{this.state.name}</p>
          <p>age{this.state.age}</p>
        </div>
      </div>
    );
  }
}

export default ClassComp;