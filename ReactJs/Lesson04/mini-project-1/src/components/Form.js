import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentId: "",
      studentName: "",
      age: 0,
      sex: true,
      birthDate: "",
      birthPlace: "",
      address: "",
    };
  }
  componentWillMount = ()=>{ 
    let { renderActionname, renderStudent } = this.props;
    if(renderActionname ==='Close' || renderActionname ==='Update'){
      this.setState({
        studentId: renderStudent.studentId,
        studentName:  renderStudent.studentName,
        age:  renderStudent.age,
        sex:  renderStudent.sex,
        birthDate:  renderStudent.birthDate,
        birthPlace: renderStudent.birthPlace,
        address: renderStudent.address,
      })
    }else{
      this.setState({
        studentId: "",
        studentName: "",
        age: 20,
        sex: true,
        birthDate: "",
        birthPlace: "",
        address: "",
      })
    }

  }
  componentWillReceiveProps = (nextProps) =>{
    let { renderActionname, renderStudent } = nextProps;
    if(renderActionname ==='Close' || renderActionname ==='Update'){
      this.setState({
        studentId: renderStudent.studentId,
        studentName:  renderStudent.studentName,
        age:  renderStudent.age,
        sex:  renderStudent.sex,
        birthDate:  renderStudent.birthDate,
        birthPlace: renderStudent.birthPlace,
        address: renderStudent.address,
      })
    }
  }
  handleSubmit = (event)=>{
    event.preventDefault()
    this.props.onSubmit(false,this.state)
  }
  handleChange = (event)=>{
    let name = event.target.name;
    let value;
    if (name === "sex") {
      value = event.target.value === "true" ? true : false;
    } else {
      value = event.target.value;
    }
    this.setState({
      [name]:value
    })
    // this.setState({...this.state,[name]:value})
  }
  render() {
    let { renderActionname, renderStudent } = this.props;
    return (
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">Thông tin sinh viên</h3>
          <form className="form-sample">
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Mã sinh viên</label>
              <div className="col-sm-9">
                <input
                onChange={this.handleChange}
                  name="studentId"
                  value={this.state.studentId}
                  type="text"
                  className="form-control"
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Tên sinh viên</label>
              <div className="col-sm-9">
                <input
                onChange={this.handleChange}
                  name="studentName"
                  value={this.state.studentName}
                  type="text"
                  className="form-control"
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Tuổi</label>
              <div className="col-sm-9">
                <input
                onChange={this.handleChange}
                  name="age"
                  value={this.state.age}
                  type="text"
                  className="form-control"
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Giới tính</label>
              <div className="col-sm-9">
                <select
                  className="form-control"
                  name="sex"
                  value={this.state.sex}
                  onChange={this.handleChange}
                >
                  <option value={true}>Nam</option>
                  <option value={false}>Nữ</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Ngày sinh</label>
              <div className="col-sm-9">
                <input
                onChange={this.handleChange}
                  name="birthDate"
                  value={this.state.birthDate}
                  type="date"
                  className="form-control"
                  placeholder="dd/mm/yyyy"
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Nơi sinh</label>
              <div className="col-sm-9">
                <select
                onChange={this.handleChange}

                  value={this.state.birthPlace}
                  name="birthPlace"
                  className="form-control"
                >
                  <option value={"HN"}>Hà Nội</option>
                  <option value={"HCM"}>TP. Hồ Chí Minh</option>
                  <option value={"ĐN"}>Đà Nẵng</option>
                  <option value={"QN"}>Quảng Ninh</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Địa chỉ</label>
              <div className="col-sm-9">
                <textarea
                onChange={this.handleChange}

                  name="address"
                  value={this.state.address}
                  className="form-control"
                />
              </div>
            </div>
            <button type="submit" className="btn btn-primary me-2"
            onClick={this.handleSubmit}>
              {renderActionname}
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Form;
