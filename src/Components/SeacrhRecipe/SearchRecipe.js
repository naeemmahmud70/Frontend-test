import React, { useState } from "react";

const SearchRecipe = ({ recipeList, setSearchResult }) => {
  const [search, setSearch] = useState("");

  const onInputChange = (e) => {
    const ingredients = e.target.value;
    setSearch(ingredients);
  };

  const formSubmit = (event) => {
    event.preventDefault();
    const searchResult = recipeList.filter((recipe) =>
      recipe.ingredients.includes(search)
    );
    if (searchResult.length > 0) {
      setSearchResult(searchResult);
      setSearch("");
    } else {
      alert("didn't match with any ingredients");
      setSearch("");
    }
  };
  return (
    <div className="row">
      <form onSubmit={formSubmit} className="d-flex justify-content-center">
        <div className="col-md-4">
          <input onChange={onInputChange} value={search} type="text" className="form-control inputStyle" placeholder="Search recipe by ingredients name"/>
        </div>
        <div>
          <button type="submit" className="btnStyle">search</button>
        </div>
      </form>
    </div>
  );
};

export default SearchRecipe;
