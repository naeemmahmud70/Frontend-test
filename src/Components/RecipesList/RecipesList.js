import React, { useEffect, useState } from "react";
import RecipeData from "../Data/Recipe.json";
import ViewRecipe from "../ViewRecipe/ViewRecipe";

const RecipesList = () => {
  const [demoRecipe, setDemoRecipe] = useState([]);
  //   const [storageRecipe, setStorageRecipe] = useState([]);
  const [recipeId, setRecipeId] = useState(null);

  const fromLocalStorageRecipes = JSON.parse(localStorage.getItem("recipes"));
  //   setStorageRecipe(fromLocalStorageRecipes);
  console.log("from storage", fromLocalStorageRecipes);

  useEffect(() => {
    setDemoRecipe(RecipeData);
  }, []);

  const GetRecipeId = (id) => {
    setRecipeId(id);

  };

  return (
    <div>
      <h1>Recipes List-</h1>
      {fromLocalStorageRecipes.length > 0 ? (
        <div>
          <p>From Local</p>
          {fromLocalStorageRecipes.map((recipe, index) => (
            <h4 onClick={() => GetRecipeId(recipe.recipeTitle)}>
              {index + 1}. {recipe.recipeTitle}
            </h4>
          ))}
        </div>
      ) : (
        <div>
          <p>From demo</p>
          {demoRecipe.map((recipe, index) => (
            <h4 onClick={() => GetRecipeId(recipe.id)}>
              {index + 1}. {recipe.recipeTitle}
            </h4>
          ))}
        </div>
      )}

      <div>
        <ViewRecipe id={recipeId}></ViewRecipe>
      </div>
    </div>
  );
};

export default RecipesList;
