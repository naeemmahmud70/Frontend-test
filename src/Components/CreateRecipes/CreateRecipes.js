import React, { useContext, useEffect, useState } from "react";
import Modal from "react-modal";
import { v4 as uuidv4 } from "uuid";
import { AddedContext, RecipeListsContext } from "../../App";
import "./CreateRecipes.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement("#root");

const CreateRecipes = ({ modalIsOpen, closeModal, deleteId, setIsAdded }) => {

  const [recipeList, setRecipeList] = useContext(RecipeListsContext);

  const [recipe, setRecipe] = useState({
    recipeTitle: "",
    ingredients: "",
    id: "",
  });

  const onChange = (e) => {
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    setRecipeList([
      ...recipeList,
      {
        id: uuidv4(),
        recipeTitle: recipe.recipeTitle,
        ingredients: recipe.ingredients,
      },
    ]);
    setIsAdded(true);

    setRecipe({
      recipeTitle: "",
      ingredients: "",
    });
    closeModal();
  };

  useEffect(() => {
    localStorage.setItem("recipes", JSON.stringify(recipeList));
  }, [recipeList]);

  useEffect(() => {
    setRecipeList(recipeList.filter((recipe) => recipe.id !== deleteId));
  }, []);

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h1>Hello Modal Take Input</h1>

        <form onSubmit={onFormSubmit} className="form">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Recipe Title
            </label>
            <input
              value={recipe.recipeTitle}
              onChange={onChange}
              name="recipeTitle"
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              required
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">
              Ingredients
            </label>
            <textarea
              value={recipe.ingredients}
              onChange={onChange}
              name="ingredients"
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="4"
              required
            />
          </div>

          <div className="d-flex justify-content-end">
            <button onClick={closeModal} className="text-end">
              close
            </button>
            <button type="submit" onClick={setIsAdded(false)}>Add</button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default CreateRecipes;
