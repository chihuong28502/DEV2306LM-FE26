import React, { useContext } from "react";
import { context } from "../hooks/useContext";

function Sort() {
  const { sort, setSort } = useContext(context);
  const handleSort = (e) => {
    setSort(e.target.value);
  };
  return (
    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
      <div className="dropdown">
        <select
          className="form-control"
          value={sort}
          name="sortBy"
          onChange={handleSort}
        >
          <option value="">Sort by</option>
          <option value="name-ASC">Name ASC</option>
          <option value="name-DESC">Name DESC</option>
          <option value="level-ASC"> Level ASC</option>
          <option value="level-DESC"> Level DESC</option>
        </select>
      </div>
    </div>
  );
}

export default Sort;
