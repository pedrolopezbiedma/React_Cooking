// Styles
import { useState } from "react";
import "./Create.css";

const Create = () => {
  const [title, setTitle] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [method, setMethod] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className="create">
      <h2 className="page-title">Add a new Recipe</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Title</span>
          <input
            type="string"
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
        {/* Ingredients  */}
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
