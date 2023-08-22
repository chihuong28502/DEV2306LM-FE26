import React, { Component } from 'react';

class ListStudents extends Component {
  render() {
    let {renderStudents} = this.props;
    
    return (
      <div>
        <h2>Lấy dữ liệu từ App</h2>
        <hr />
        <table className='table table-borderd'>
        <thead>
          {renderStudents.map((student,index)=>(
      <>
      <tr>
            <td>{index +1}</td>
            <td>{student.name}</td>
            <td>{student.age}</td>
          </tr>
      </>
    ))}
        </thead>
        <tbody>
          
        </tbody>
        </table>
      </div>
    );
  }
}

export default ListStudents;