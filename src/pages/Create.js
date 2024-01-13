// Styles
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

// Styles
import "./Create.css";

const Create = () => {
  const [title, setTitle] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [method, setMethod] = useState("");
  const [ingredient, setIngredient] = useState("");
  const [recipeIngredients, setRecipeIngredients] = useState([]);
  const { postData, data: result } = useFetch(
    "http://localhost:3005/recipes",
    "POST"
  );
  const history = useHistory();

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
    postData({ title, cookingTime, ingredients: recipeIngredients, method });
  };

  useEffect(() => {
    if (result) {
      history.push("/");
    }
  }, [result, history]);

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
              Add
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
