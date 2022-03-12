import React, { useState } from "react";
import CreateRecipes from "../CreateRecipes/CreateRecipes";

const ViewRecipe = ({ id }) => {
  console.log(id);

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div>
      <div>
        <h1>View Recipe</h1>
        <h6>Recipe Details</h6>
      </div>
      <div>
        <button onClick={openModal}>Add</button>
        <CreateRecipes
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
        ></CreateRecipes>
      </div>
    </div>
  );
};

export default ViewRecipe;
