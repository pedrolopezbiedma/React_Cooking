// Styles
import { useState } from "react";
import "./Create.css";

const Create = () => {
  const [title, setTitle] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [method, setMethod] = useState("");
  const [ingredient, setIngredient] = useState("");
  const [recipeIngredients, setRecipeIngredients] = useState([]);

  const onAddIngredient = (event) => {
    event.preventDefault();
    if (ingredient && !recipeIngredients.includes(ingredient)) {
      setRecipeIngredients((prevRecipeIngredients) => {
        return [...prevRecipeIngredients, ingredient];
      });
      setIngredient("");
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(
      "Values in the form are -->",
      title,
      cookingTime,
      recipeIngredients,
      method
    );
  };
  return (
    <div className="create">
      <h2 className="page-title">Add a new Recipe</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Title</span>
          <input
            type="text"
            required
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </label>
        <label>
          <span>Cooking Time</span>
          <input
            type="number"
            required
            value={cookingTime}
            onChange={(event) => setCookingTime(event.target.value)}
          />
        </label>
        <label>
          <span>Ingredients</span>
          <div className="ingredients">
            <input
              type="text"
              value={ingredient}
              onChange={(event) => setIngredient(event.target.value)}
            />
            <button className="btn" onClick={onAddIngredient}>
              Add Ingredient
            </button>
          </div>
          <p className="ingredients">
            {recipeIngredients.map((recipeIngredient) => (
              <em key={recipeIngredient}>{recipeIngredient}, </em>
            ))}
          </p>
        </label>
        <label>
          <span>Method</span>
          <textarea
            typeof="string"
            required
            value={method}
            onChange={(event) => setMethod(event.target.value)}
          />
        </label>
        <button className="btn">Create</button>
      </form>
    </div>
  );
};

export default Create;
