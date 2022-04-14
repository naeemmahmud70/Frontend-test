import React, { useContext, useState } from "react";
import { RecipeListsContext } from "../../App";
import CreateRecipes from "../CreateRecipes/CreateRecipes";

const ViewRecipe = ({
  recipe,
  setViewRecipe,
  setIsAdded,
  searchResult,
  ingredientsList,
}) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  const [recipeList, setRecipeList] = useContext(RecipeListsContext);
  const [updateRecipe, setUpdateRecipe] = useState(null);

  const handleDelete = (id) => {
    setRecipeList(recipeList.filter((recipe) => recipe.id !== id));
    setViewRecipe({});
    setIsAdded(true);
  };

  const handleUpdate = (id) => {
    setIsOpen(true);
    const findRecipe = recipeList.find((recipe) => recipe.id === id);
    setUpdateRecipe(findRecipe);
    setIsAdded(true);
  };

  return (
    <div>
      <div className="shadow p-3">
        {searchResult.length > 0 ? (
          <div>
            <h1>{recipe.recipeTitle}</h1>
            <h6>{recipe.ingredients}</h6>
          </div>
        ) : (
          <div>
            {recipe.id && (
              <div>
                <div className="d-flex justify-content-between">
                  <div>
                    <h2>{recipe.recipeTitle}</h2>
                  </div>
                  <div>
                    <button
                      className="btnStyle mx-2"
                      onClick={() => handleUpdate(recipe.id)}
                    >
                      Update
                    </button>
                    <button
                      className="btnStyle"
                      onClick={() => handleDelete(recipe.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
                <h4 className="my-3">Ingredients:</h4>
                <ul>
                  {ingredientsList.map((ingredients) => (
                    <li>{ingredients}</li>
                  ))}
                </ul>
              </div>
            )}
            <div className="">
              <CreateRecipes
                modalIsOpen={modalIsOpen}
                closeModal={closeModal}
                setIsAdded={setIsAdded}
                updateRecipe={updateRecipe}
                setUpdateRecipe={setUpdateRecipe}
              ></CreateRecipes>
              <button onClick={openModal} className="btnStyle">
                Add
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewRecipe;
