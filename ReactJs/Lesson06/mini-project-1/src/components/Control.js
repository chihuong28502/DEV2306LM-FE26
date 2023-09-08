import React, { Component } from "react";

class Control extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: "",
      sortBy: "",
    };
  }
  handleSearch = (ev) => {
    ev.preventDefault();
    this.props.onSearch(this.state.keyword);
  };
  // hàm xử lý sự kiện khi người dùng click vào nút thêm
  handleAdd = () => {
    this.props.onAddOrEditView(true, "Save");
  };
  // hàm xếp
  handleSort = (event) => {
    let value = event.target.value;
    this.setState({ sortBy: value });
    this.props.onSort(value);
  };
  render() {
    return (
      <div className="card-header">
        <div className="row">
          <div className="col-3 ">
            <button
              type="button"
              className="btn btn-primary btn-icon-text"
              onClick={this.handleAdd}
            >
              Thêm mới sinh viên
            </button>
          </div>
          <div className="col-6 ">
            <form className="search-form" action="#">
              <i className="icon-search" />
              <input
                value={this.state.keyword}
                onChange={(ev) => this.setState({ keyword: ev.target.value })}
                type="search"
                className="form-control"
                placeholder="Search Here"
                title="Search here"
              />
              <button
                onClick={this.handleSearch}
                className="btn btn-primary btn-icon-text"
              >
                Tìm kiếm
              </button>
            </form>
          </div>
          <div className="col-3 d-flex align-items-center">
            <select
              className="form-control)
            "
              value={this.state.sortBy}
              name="sortBy"
              onChange={this.handleSort}
            >
              <option value="">Sắp xếp</option>
              <option value="studentName-ASC">studentName tăng</option>
              <option value="studentName-DESC">studentName giảm</option>
              <option value="age-ASC">age tăng</option>
              <option value="age-DESC">age giảm</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
}

export default Control;
