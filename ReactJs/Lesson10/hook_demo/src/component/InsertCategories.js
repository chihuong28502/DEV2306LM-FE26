import React, { useState } from "react";

function InsertCategories({ data }) {
  const [info, setInfo] = useState({
    title: "",
    icon: "",
    metaDescription: "",
  });
  const [title, setTitle] = useState("");
  const [icon, setIcon] = useState("");
  const [desp, setDesp] = useState("");

  const submitForm = () => {
    setInfo({
      title: title,
      icon: icon,
      desp: desp,
    });
  };
  return (
    <div>
      <h2>thêm mới categories</h2>
      <>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">title</label>
          <input
            name="title"
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            className="form-control"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">icon</label>
          <input
            name="icon"
            onChange={(e) => setIcon(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">description</label>
          <input
            name="description"
            onChange={(e) => setDesp(e.target.value)}
            className="form-control"
          />
        </div>
        <button onClick={submitForm} type="submit" className="btn btn-primary">
          Submit
        </button>
      </>
    </div>
  );
}

export default InsertCategories;
