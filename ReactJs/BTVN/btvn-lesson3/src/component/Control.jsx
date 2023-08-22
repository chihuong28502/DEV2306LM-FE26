import React, { Component } from 'react';
import App from '../App';
class Control extends Component {
  constructor (props) {
    super(props);
    this.state={
      name: '',
      arr: [],
      value: ''
    }
  }

  handleSearch =()=>{
    let {students} = this.props;
    students.map((student,index)=>{
      if(student.studentName.toLowerCase().includes(this.state.name.toLowerCase()))
      this.state.arr.push(student)
          this.setState(prevState => ({
            arr: [...prevState.arr,student]
          }))

          console.log(this.state.arr)
          this.setState({arr:[]})
    })
  }
  handleChange = (e)=>{
    this.setState({
      name : e.target.value,
    })

  }
  render() {
    return (
      <div className='text-center mt-5'>
        <input type="text" onChange={this.handleChange}/>
        <button onClick={this.handleSearch}>Tìm kiếm</button>
        {/* <App onChangData= {this.state.arr}/> */}
      </div>
    );
  }
}

export default Control;









// import React, { useState } from 'react'

// export default function Control(props) {

//   const [students,setStudents] = useState({props});
//   const [value,setValue] = useState('');
//   const handleSearch =()=>{
//       props.students.map((student,index) =>{
//           if(student.studentName.toLowerCase().includes(value.toLowerCase()))
//           {
//             setStudents(prev => ({...prev,student}))
//           }
//           console.log(students)
//         })
//       }
//   const handleChange = (e)=>{
//     setValue(e.target.value)
//     }

//   return (
//           <div className='text-center mt-5'>
//             <input type="text" onChange={handleChange}/>
//             <button onClick={handleSearch}>Tìm kiếm</button>
//           </div>
//         );
// }
