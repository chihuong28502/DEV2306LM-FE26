import React, { Component } from "react";

class Control extends Component {
  constructor(props) {
    super(props);
    this.state ={
      value: '',
      arr:[],
    }
  }
  handleChange = (event) => {
    this.setState({value: event.target.value})
    let {dataHandle} = this.props
    dataHandle.map(student =>{
      if(student.studentName.toLowerCase().includes(this.state.value.toLowerCase()))
      this.state.arr.push(student)
      console.log(this.state.arr)
      
      this.setState({arr:[]})
      this.props.funcGetData(this.state.arr)
    })
  }
  render() {
    return (
      <div className="card-header">
        <div className="row">
          <div className="col-3 ">
            <button type="button" className="btn btn-primary btn-icon-text">
              Thêm mới sinh viên
            </button>
          </div>
          <div className="col-6 ">
            <form className="search-form" action="#">
              <i className="icon-search" />
              <input
                type="search"
                onChange={this.handleChange}
                onKeyDown={this.handleChange}
                onKeyUp={this.handleChange}
                className="form-control"
                placeholder="Search Here"
                title="Search here"
              />
              <button className="btn btn-primary btn-icon-text">
                Tìm kiếm
              </button>
            </form>
          </div>
          <div className="col-3 d-flex align-items-center">
            <select className="form-control">
              <option value="">Sắp xếp</option>
              <option value="">ABC def</option>
              <option value="">ABC def</option>
              <option value="">ABC def</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
}

export default Control;
