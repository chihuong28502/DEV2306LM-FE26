import React, { useState } from "react";

function Control({onSearch, onAddTask, onSort }) {
  //state control value sort
  const [sort, setSort] = useState("");
  const handleSort = (e) => {
    let value = e.target.value;
    setSort(value);
    onSort(value);
  };

  // xử lí thêm mới
  const handleAdd = () => {
    onAddTask(true, "Save", null);
  };
  const [valueSearch, setValueSearch] = useState("");
  const handleSearch = () => {
    onSearch(valueSearch);
  };
  return (
    <div className="row">
      {/* SEARCH : START */}
      <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
        <div className="input-group">
          <input
            onChange={(e) => setValueSearch(e.target.value)}
            type="text"
            className="form-control"
            placeholder="Search for..."
          />
          <span className="input-group-btn">
            <button
              onClick={handleSearch}
              className="btn btn-info"
              type="button"
            >
              Go!
            </button>
          </span>
        </div>
      </div>
      {/* SEARCH : END */}
      {/* SORT : START */}
      <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
        <div className="dropdown">
          <select className="form-control" value={sort} onChange={handleSort}>
            <option value="">Sort by</option>
            <option value="name-ASC">Name ASC</option>
            <option value="name-DESC">Name DESC</option>
            <option value="level-ASC"> Level ASC</option>
            <option value="level-DESC"> Level DESC</option>
          </select>
        </div>
      </div>
      {/* SORT : END */}
      {/* ADD : START */}
      <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
        <button
          onClick={handleAdd}
          type="button"
          className="btn btn-info btn-block"
        >
          Add Task
        </button>
      </div>
      {/* ADD : END */}
    </div>
  );
}

export default Control;
