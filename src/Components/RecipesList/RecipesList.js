import React, { useEffect, useState } from "react";
import RecipeData from "../Data/Recipe.json";
import ViewRecipe from "../ViewRecipe/ViewRecipe";

const RecipesList = ({ isAdded, setIsAdded, searchResult }) => {
  const [demoRecipe, setDemoRecipe] = useState([]);
  const [localStorageRecipe, setLocalStorageRecipe] = useState([]);
  const [viewRecipe, setViewRecipe] = useState({});

  useEffect(() => {
    setDemoRecipe(RecipeData);
    const fromLocalStorageRecipes = JSON.parse(localStorage.getItem("recipes"));
    setLocalStorageRecipe(fromLocalStorageRecipes);
  }, [isAdded]);

  const GetRecipeId = (id) => {
    const foundRecipe = localStorageRecipe.find((recipe) => recipe.id === id);
    setViewRecipe(foundRecipe);
  };
  console.log(searchResult);
  return (
    <div>
      <h1>Recipes List-</h1>
      {searchResult.length > 0 ? (
        <div>
          <p>From Search</p>
          {searchResult.map((recipe, index) => (
            <h4 onClick={() => GetRecipeId(recipe.id)}>
              {index + 1}. {recipe.recipeTitle}
            </h4>
          ))}
        </div>
      ) : (
        <div>
          <p>From Local</p>
          {localStorageRecipe.map((recipe, index) => (
            <h4 onClick={() => GetRecipeId(recipe.id)}>
              {index + 1}. {recipe.recipeTitle}
            </h4>
          ))}
        </div>
      )}

      <div>
        <ViewRecipe
          recipe={viewRecipe}
          setViewRecipe={setViewRecipe}
          key={viewRecipe.id}
          setIsAdded={setIsAdded}
          searchResult={searchResult}
        ></ViewRecipe>
      </div>
    </div>
  );
};

export default RecipesList;
