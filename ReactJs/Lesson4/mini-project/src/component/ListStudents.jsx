import React, { Component } from "react";
import Student from "./Student";

class ListStudents extends Component {

  render() {
    let {renderStudents} = this.props;
    // let elementStudent = renderStudents.map((student,index)=>
    //   <Student key={index}  renderStudent = {student} stt= {index +1 }/>
    // )
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
              {
                renderStudents.map((student,index)=>
                <Student key={index}  renderStudent = {student} stt= {index +1 }/>
                )
              }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListStudents;
