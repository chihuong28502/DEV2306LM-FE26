import React, { Component } from 'react';
// rcc
export default class ClassCompDemo extends Component {
  render() {
    return (
      <>
        <h2>ClassCompDemo</h2>
        <div className='alert alert-success'>
          <h3>sử dụng thuộc tính từ props của ClassCompDemo</h3>
          <p>welcome to {this.props.name}</p>
          <p>age {this.props.age}</p>
          <p>company {this.props.company}</p>
        </div>
      </>
    )
  }
}

