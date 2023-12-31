import React, { Component } from "react";
import Student from "./Student";

class ListStudent extends Component {
  handleEditOrView = (toggle,actionName,student)=>{
    this.props.onHandleEditOrView(toggle,actionName,student);
  }
  handleDelete =(student)=>{
    this.props.onHandleDelete(student);
  }
  render() {
    let { renderStudents } = this.props;

    console.log(renderStudents)
    let elementStudent = renderStudents.map((student, index) => {
      return (
        <Student
          key={index}
          renderStudent={student}
          stt={index + 1}
          onHandleEditOrView ={this.handleEditOrView}
          onHandleDelete={this.handleDelete}
        />
      );
    });
    return (
      <div className="card-body">
        <h3 className="card-title">Danh sách sinh viên</h3>
        <div className="table-responsive pt-3">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>#</th>
                <th>Mã sinh viên</th>
                <th>Tên sinh viên</th>
                <th>Tuổi</th>
                <th>Giới tính</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>
              {/* <Student />
                <Student />
                <Student /> */}
              {elementStudent}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListStudent;
