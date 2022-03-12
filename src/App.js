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
    <div>
      <h1 className="text-center fw-bold">Recipe Builder</h1>
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
  );
}

export default App;
