import React, { Component } from "react";
import Title from "./components/Title";
import Control from "./components/Control";
import ListStudent from "./components/ListStudent";
import Form from "./components/Form";
import Student from "./components/Student";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [
        {
          studentId: "SV001",
          studentName: "Nguyễn Văn A",
          age: 20,
          sex: true,
          birthDate: "2002-04-23",
          birthPlace: "HN",
          address: "25, Vũ Ngọc Phan",
        },
        {
          studentId: "SV002",
          studentName: "Nguyễn Văn B",
          age: 21,
          sex: false,
          birthDate: "2001-09-09",
          birthPlace: "ĐN",
          address: "1, Ngô Quyền",
        },
        {
          studentId: "SV003",
          studentName: "Nguyễn Văn C",
          age: 19,
          sex: true,
          birthDate: "2003-07-07",
          birthPlace: "HCM",
          address: "1, Lý Tự Trọng",
        },
        {
          studentId: "SV004",
          studentName: "Nguyễn Văn D",
          age: 29,
          sex: false,
          birthDate: "2005-07-07",
          birthPlace: "HCM",
          address: "1, Lý Tự Trọng",
        },
      ],
      isToggle: false, // sử dụng cho chức nâng ẩn form
      actionName: "",
      student:{},
    };
  }
  // xử lí sự kiện Add,View
  handleAddOrEditView = (toggle,actionName,student) => {
    this.setState(
      { actionName: actionName,
        isToggle: toggle,
        student:student
      }
      );
  };
  // xu li khi submit form
  handleSubmit = (toggle,student)=>{
    this.setState({isToggle:toggle})
    if(this.state.actionName ==="Save"){
      this.setState({students: [...this.state.students,student]})
    }else if(this.state.actionName ==="Update"){
      let {students} = this.state;
      for(var i=0; i<students.length; i++) {
        if(students[i].studentId === student.studentId){
          students[i] = student
          console.log(students[i].sex)
          break;
        }
      }
    }
  }
  handleDelete =(student)=>{
    let { students } = this.state;
    for(var i=0; i<students.length; i++){
      debugger
      if(students[i].studentId === student.studentId){
        students.splice(i, 1)
        this.setState({ students: students})
      }
    }
  }
  render() {
    let { students } = this.state;
    // render form theo giá trị isToggle
    let elementForm =
      this.state.isToggle === true ? (
        <Form 
          onSubmit = {this.handleSubmit}
          renderActionname={this.state.actionName} 
          renderStudent ={this.state.student}
        />
      ) : ( "");

    return (
      <div className="container-fluid">
        <Title />
        <div className="row">
          <div className="col-lg-7 grid-margin stretch-card">
            <div className="card">
              <Control onAddOrEditView={this.handleAddOrEditView} />
              <ListStudent
                onHandleEditOrView={this.handleAddOrEditView}
                onHandleDelete = {this.handleDelete}
                renderStudents={students} />
            </div>
          </div>
          <div className="col-5 grid-margin">{elementForm}</div>
        </div>
      </div>
    );
  }
}

export default App;
