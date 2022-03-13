import { createContext, useState } from "react";
import "./App.css";
import RecipesList from "./Components/RecipesList/RecipesList";
import SearchRecipe from "./Components/SeacrhRecipe/SearchRecipe";

export const AddedContext = createContext();
export const RecipeListsContext = createContext();

function App() {
  const initialState = JSON.parse(localStorage.getItem("recipes")) || [];
  const [recipeList, setRecipeList] = useState(initialState);
  const [isAdded, setIsAdded] = useState(false);
  const [searchResult, setSearchResult] = useState([]);

  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-md-8 shadow">
          <h2 className="text-center fw-bold textColor mt-2">Recipe Builder</h2>
          <hr />
          <RecipeListsContext.Provider value={[recipeList, setRecipeList]}>
            <SearchRecipe
              recipeList={recipeList}
              setRecipeList={setRecipeList}
              setSearchResult={setSearchResult}
            ></SearchRecipe>
            <RecipesList
              isAdded={isAdded}
              setIsAdded={setIsAdded}
              searchResult={searchResult}
            ></RecipesList>
          </RecipeListsContext.Provider>
        </div>
      </div>
    </div>
  );
}

export default App;
