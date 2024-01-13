import RecipeList from "../components/RecipeList";
import { useFetch } from "../hooks/useFetch";

// Styles
import "./Home.css";

const Home = () => {
  const {
    data: recipes,
    isPending,
    error,
  } = useFetch("http://localhost:3005/recipes");

  return (
    <div className="home">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="pending">Loading...</p>}
      {recipes && <RecipeList recipes={recipes} />}
    </div>
  );
};

export default Home;
