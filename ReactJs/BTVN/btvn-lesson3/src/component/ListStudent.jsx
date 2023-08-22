import React, { Component } from 'react';

class ListStudent extends Component {
  
  render() {
    let {renderStudents} = this.props;
    return (
      <table className='table'>
        <thead>
          <tr>
            <th>#</th>
            <th>Mã sinh viên</th>
            <th>Tên sinh viên</th>
            <th>Tuổi</th>
          </tr>
        </thead>
        <tbody>
          {renderStudents.map((student,index)=>(
            <tr key={index}>
              <td>{index +1}</td>
              <td>{student.studentId}</td>
              <td>{student.studentName}</td>
              <td>{student.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default ListStudent;