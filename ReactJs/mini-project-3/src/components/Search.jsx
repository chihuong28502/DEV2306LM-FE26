import React, { useContext, useState } from "react";
import { context } from "../hooks/useContext";

function Search() {
  const [value, setValue] = useState("");
  const { setGetSearch } = useContext(context);
  const handleGoSearch = () => {
    setGetSearch(value);
  };
  return (
    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
      <div className="input-group">
        <input
          onChange={(e) => setValue(e.target.value)}
          type="text"
          className="form-control"
          placeholder="Search for..."
        />
        <span className="input-group-btn">
          <button
            onClick={handleGoSearch}
            className="btn btn-info"
            type="button"
          >
            Go!
          </button>
        </span>
      </div>
    </div>
  );
}

export default Search;
