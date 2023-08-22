import React, { Component } from 'react';
import ListStudent from './component/ListStudent';
import Control from './component/Control';

class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
      students: [
        { studentId: "SV001", studentName: "Nguyễn Văn A", age: 20 },
        { studentId: "SV002", studentName: "Giang Văn B", age: 21 },
        { studentId: "SV003", studentName: "Đỗ Văn C", age: 19 },
        { studentId: "SV004", studentName: "Hồ Văn D", age: 19 },
        { studentId: "SV005", studentName: "Hồ Văn A", age: 20 },
        { studentId: "SV006", studentName: "Tạ Hữu A", age: 20 },
        { studentId: "SV007", studentName: "Nguyễn Văn F", age: 20 },
      ]
    }
  }
  callbackFunction = (childData) => {
    this.setState({ 
      students: childData
    })
  }
  // this.state = {}
  
  render() {

    // console.log(this.props)
    return (
      <div>
        <Control 
          parentCallback={this.callbackFunction}
        students = {this.state.students}/>
        <ListStudent renderStudents = {this.state.students}/>
        <button onClick={this.handleChange}>handleChange</button>
      </div>
    );
  }
}

export default App;