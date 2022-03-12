import { createContext, useState } from "react";
import "./App.css";
import RecipesList from "./Components/RecipesList/RecipesList";

export const AddedContext = createContext();
export const RecipeListsContext = createContext();

function App() {
  const initialState = JSON.parse(localStorage.getItem("recipes")) || [];
  const [isAdded, setIsAdded] = useState(false);
  const [recipeList, setRecipeList] = useState(initialState);
  return (
    <div>
      <h1 className="text-center fw-bold">Recipe Builder</h1>
      {/* <AddedContext.Provider value={[isAdded, setIsAdded]}> */}
      <RecipeListsContext.Provider value={[recipeList, setRecipeList]}>
        <RecipesList></RecipesList>
      </RecipeListsContext.Provider>
      {/* </AddedContext.Provider> */}
    </div>
  );
}

export default App;
