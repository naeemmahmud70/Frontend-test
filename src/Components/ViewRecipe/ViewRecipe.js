import React, { useContext, useState } from "react";
import { AddedContext, RecipeListsContext } from "../../App";
import CreateRecipes from "../CreateRecipes/CreateRecipes";

const ViewRecipe = ({ recipe, setIsAdded }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  const [recipeList, setRecipeList] = useContext(RecipeListsContext);
  const [deleteId, setDeleteId] = useState(null);

  const handleDelete = (id) => {
    setRecipeList(recipeList.filter((recipe) => recipe.id !== id));
    setIsAdded(true);
  };

  return (
    <div className="shadow p-4 m-3">
      <div>
        <div className="d-flex justify-content-between">
          <div>
            <h1>{recipe.recipeTitle}</h1>
          </div>
          <div>
            <button>Update</button>
            <button onClick={() => handleDelete(recipe.id)}>Delete</button>
          </div>
        </div>
        <h6>{recipe.ingredients}</h6>
      </div>
      <div className="shadow p-3 m-3">
        <button onClick={openModal}>Add</button>
        <CreateRecipes
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
          deleteId={deleteId}
          setIsAdded={setIsAdded}
        ></CreateRecipes>
      </div>
    </div>
  );
};

export default ViewRecipe;
