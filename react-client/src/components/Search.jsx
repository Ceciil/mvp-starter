import React from "react";

function Search(props) {
  return (
    <div>
      <form onSubmit={props.onSubmit}>
        <label className="input-search">
          <input
            onChange={props.onChange}
            id="search"
            type="text"
            name="search"
            placeholder="Find your favorite place..."
          />
        </label>
      </form>
    </div>
  );
}

export default Search;
