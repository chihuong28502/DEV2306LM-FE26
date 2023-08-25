import React, { Component } from "react";
import Title from "./component/Title";
import Control from "./component/Control";
import Form from "./component/Form";
import ListStudents from "./component/ListStudents";

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
          studentName: "Nguyễn Nhược B",
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
          studentName: "Nguyễn Nhược D",
          age: 29,
          sex: false,
          birthDate: "2005-07-07",
          birthPlace: "HCM",
          address: "1, Lý Tự Trọng",
        },
      ],
      arrSearch: [],
    };
  }
  funcGetData = (data) => {
    this.setState({ arrSearch: data });
  };
  funcSendDataSubmit = (data) => {
      this.setState({ students: [...this.state.students, data]});
  };
  render() {
    let { students } = this.state;
    let { arrSearch } = this.state;
    return (
      <div className="container-fluid">
        <Title />
        <div className="row">
          <div className="col-lg-7 grid-margin stretch-card">
            <div className="card">
              <Control dataHandle={students} funcGetData={this.funcGetData} />
              <ListStudents renderStudents={students} />
              <ListStudents renderStudents={arrSearch} />
            </div>
          </div>
          <div className="col-5 grid-margin">
            <Form funcSendDataSubmit={this.funcSendDataSubmit} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
