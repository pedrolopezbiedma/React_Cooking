import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

// Styles
import "./Recipe.css";
import { useThemeContext } from "../hooks/useThemeContext";

const Recipe = () => {
  const { mode } = useThemeContext();
  const { id: recipeId } = useParams();
  const {
    data: recipe,
    isPending,
    error,
  } = useFetch(`http://localhost:3005/recipes/${recipeId}`);
  return (
    <div className={`recipe ${mode}`}>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="pending">Loading...</p>}
      {recipe && (
        <>
          <h2 className="page-title">{recipe.title}</h2>
          <p>Takes {recipe.cookingTime} to cook</p>
          <ul>
            {recipe.ingredients.map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
          <p className="method">{recipe.method}</p>
        </>
      )}
    </div>
  );
};

export default Recipe;
