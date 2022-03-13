import React, { useEffect, useState } from "react";
import ViewRecipe from "../ViewRecipe/ViewRecipe";

const RecipesList = ({ isAdded, setIsAdded, searchResult }) => {
  const [localStorageRecipe, setLocalStorageRecipe] = useState([]);
  const [viewRecipe, setViewRecipe] = useState({});
  const [ingredientsList, setIngredientsList] = useState([]);

  useEffect(() => {
    const fromLocalStorageRecipes = JSON.parse(localStorage.getItem("recipes"));
    setLocalStorageRecipe(fromLocalStorageRecipes);
  }, [isAdded]);

  const GetRecipe = (id) => {
    const foundRecipe = localStorageRecipe.find((recipe) => recipe.id === id);
    setViewRecipe(foundRecipe);
    const ingredients = foundRecipe.ingredients;
    const ingredientsList = ingredients.split(",");
    setIngredientsList(ingredientsList);
  };

  return (
    <div className="row p-3">
      <h2>Recipe List:</h2>
      {searchResult.length > 0 ? (
        <div>
          {searchResult.map((recipe, index) => (
            <h4 onClick={() => GetRecipe(recipe.id)}>
              {index + 1}. {recipe.recipeTitle}
            </h4>
          ))}
        </div>
      ) : (
        <div>
          {localStorageRecipe.map((recipe, index) => (
            <h4 onClick={() => GetRecipe(recipe.id)}>
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
          ingredientsList={ingredientsList}
        ></ViewRecipe>
      </div>
    </div>
  );
};

export default RecipesList;
