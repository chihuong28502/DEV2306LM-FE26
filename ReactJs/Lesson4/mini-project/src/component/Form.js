import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
        studentId: '',
        studentName: '',
        age: '',
        birthDate:'',
        sex: true,
    }
  }
  handleGetMa = (value)=>{
    this.setState({studentId:value.target.value})
  }

  handleGetName = (value)=>{
    this.setState({studentName: value.target.value})
  }
  handleAge = (value)=>{
    this.setState({age: value.target.value})
  }
  handleGetborn = (value) =>{
    this.setState({birthDate: value.target.value})
  }
  handleGetSex = (value)=>{
    if(value.target.value === "Nam"){
    this.setState({sex: true})
    }else{
    this.setState({sex: false})
    }
  }
  handleClick = (event) =>{
    event.preventDefault()
    console.log(this.state)
      this.props.funcSendDataSubmit(this.state)
    }

  render() {
    return (
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">Thông tin sinh viên</h3>
          <form className="form-sample">
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Mã sinh viên</label>
              <div className="col-sm-9">
                <input type="text" className="form-control" onBlur={this.handleGetMa}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Tên sinh viên</label>
              <div className="col-sm-9">
                <input type="text" className="form-control" onBlur={this.handleGetName}/> 
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Tuổi</label>
              <div className="col-sm-9">
                <input type="number" className="form-control" onBlur={this.handleAge}/> 
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Giới tính</label>
              <div className="col-sm-9">
                <select className="form-control"  onChange={this.handleGetSex}>
                  <option value={"Nam"}>Nam</option>
                  <option value={"Nu"}>Nữ</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Ngày sinh</label>
              <div className="col-sm-9">
                <input  className="form-control" placeholder="dd/mm/yyyy" onBlur={this.handleGetborn}/>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Nơi sinh</label>
              <div className="col-sm-9">
                <select className="form-control">
                  <option>Hà Nội</option>
                  <option>TP. Hồ Chí Minh</option>
                  <option>Đà Nẵng</option>
                  <option>Quảng Ninh</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Địa chỉ</label>
              <div className="col-sm-9">
                <textarea className="form-control" defaultValue={""} />
              </div>
            </div>
            <button type="submit" className="btn btn-primary me-2"
                  onClick={this.handleClick}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Form;
