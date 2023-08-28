import React, { Component } from "react";

class Student extends Component {
  handleEditOrView = (student,actionName) => {
    this.props.onHandleEditOrView(true,actionName,student)
  }
  handleDelete =()=>{
    this.props.onHandleDelete(this.props.renderStudent)
  }
  render() {
    // Lấy dữ liệu truyền qua props từ ListStudent ->Student
    let { renderStudent, stt } = this.props;

    console.log(renderStudent)
    return (
      <>
        <tr>
          <td>{stt}</td>
          <td>{renderStudent.studentId}</td>
          <td>{renderStudent.studentName}</td>
          <td>{renderStudent.age}</td>
          <td>{renderStudent.sex === true ? "Nam" : "Nữ"}</td>
          <td>
            <div className="template-demo">
              <button
                // onClick={() => this.handleView(renderStudent)}
                onClick={() => this.handleEditOrView(renderStudent,"Close")}
                type="button"
                className="btn btn-danger btn-icon-text"
              >
                Xem
              </button>
              <button 
                // onClick={() => this.handleEdit(renderStudent)}
                onClick={() => this.handleEditOrView(renderStudent,"Update")}
              type="button" className="btn btn-warning btn-icon-text">
                Sửa
              </button>
              <button 
                onClick={this.handleDelete}
              type="button" className="btn btn-success btn-icon-text">
                Xóa
              </button>
            </div>
          </td>
        </tr>
      </>
    );
  }
}

export default Student;
