// React
import { Link } from "react-router-dom";

// Context
import { useThemeContext } from "../hooks/useThemeContext";

// Styles
import "./RecipeList.css";

const RecipeList = ({ recipes }) => {
  const { mode } = useThemeContext();
  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <div className={`card ${mode}`} key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.cookingTime} to make</p>
          <div>{recipe.method.substring(0, 100)}...</div>
          <Link to={`/recipes/${recipe.id}`}>Cook this</Link>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
