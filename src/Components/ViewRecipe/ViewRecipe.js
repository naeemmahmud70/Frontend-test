import React, { useContext, useState } from "react";
import { RecipeListsContext } from "../../App";
import CreateRecipes from "../CreateRecipes/CreateRecipes";

const ViewRecipe = ({ recipe, setViewRecipe, setIsAdded, searchResult }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  const [recipeList, setRecipeList] = useContext(RecipeListsContext);

  const handleDelete = (id) => {
    setRecipeList(recipeList.filter((recipe) => recipe.id !== id));
    setViewRecipe({});
    setIsAdded(true);
  };

  const handleUpdate = (id) => {
    setIsOpen(true);
    const editRecipe = recipeList.find((recipe) => recipe.id === id);
    console.log(editRecipe);
  };

  return (
    <div className="shadow p-4 m-3">
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
                  <h1>{recipe.recipeTitle}</h1>
                </div>
                <div>
                  <button onClick={() => handleUpdate(recipe.id)}>
                    Update
                  </button>
                  <button onClick={() => handleDelete(recipe.id)}>
                    Delete
                  </button>
                </div>
              </div>
              <h6>{recipe.ingredients}</h6>
            </div>
          )}
          <div className="shadow p-3 m-3">
            <button onClick={openModal}>Add</button>
            <CreateRecipes
              modalIsOpen={modalIsOpen}
              closeModal={closeModal}
              setIsAdded={setIsAdded}
              updateRecipe={recipe}
            ></CreateRecipes>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewRecipe;
