import "./App.css";
import RecipesList from "./Components/RecipesList/RecipesList";

function App() {
  return (
    <div>
      <h1 className="text-center fw-bold">Recipe Builder</h1>
      <RecipesList></RecipesList>
    </div>
  );
}

export default App;
