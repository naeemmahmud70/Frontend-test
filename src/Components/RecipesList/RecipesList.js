import React, { useContext, useEffect, useState } from "react";
import { AddedContext } from "../../App";
import RecipeData from "../Data/Recipe.json";
import ViewRecipe from "../ViewRecipe/ViewRecipe";

const RecipesList = () => {
  const [demoRecipe, setDemoRecipe] = useState([]);
  const [localStorageRecipe, setLocalStorageRecipe] = useState([]);
  const [viewRecipe, setViewRecipe] = useState({});

  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    setDemoRecipe(RecipeData);
    const fromLocalStorageRecipes = JSON.parse(localStorage.getItem("recipes"));
    setLocalStorageRecipe(fromLocalStorageRecipes);
  }, [isAdded]);

  const GetRecipeId = (id) => {
    const foundRecipe = localStorageRecipe.find((recipe) => recipe.id === id);
    setViewRecipe(foundRecipe);
  };

  return (
    <div>
      <h1>Recipes List-</h1>
      {localStorageRecipe.length > 0 ? (
        <div>
          <p>From Local</p>
          {localStorageRecipe.map((recipe, index) => (
            <h4 onClick={() => GetRecipeId(recipe.id)}>
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
        <ViewRecipe
          recipe={viewRecipe}
          key={viewRecipe.id}
          setIsAdded={setIsAdded}
        ></ViewRecipe>
      </div>
    </div>
  );
};

export default RecipesList;
