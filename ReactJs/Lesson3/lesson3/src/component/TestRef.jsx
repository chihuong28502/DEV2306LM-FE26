import React, { Component } from 'react';

class TestRef extends Component {
  constructor(props) {
    super(props);
      this.studentName = React.createRef();
      this.age = React.createRef();
      this.course = React.createRef();
  }
  handleSend = (e) =>{
    let student = {
      studentName: this.studentName.current.value,
      age: this.age.current.value,
      course: this.course.current.value
    }

    console.log(student)
    
  }
  render() {
    return (
      <div>
        <p>tên: <input type="text" ref={this.studentName} /></p>
        <p>tuổi: <input type="text" ref={this.age}/></p>
        <select name="" id="" ref={this.course}>
          <option value="htmls">htmls</option>
          <option value="css">css</option>
          <option value="Javascript">Javascript</option>
        </select>
        <button onClick={this.handleSend}>gửi</button>
      </div>
    );
  }
}

export default TestRef;