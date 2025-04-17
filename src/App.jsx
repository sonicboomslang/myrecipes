import { useState, useEffect } from 'react';
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetail';


function App() {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
      .then((res) => res.json())
      .then((data) => setRecipes(data.meals));
  }, []);

  return (
    <div className="App">
      <h1> Dig These Recipes: </h1>
      {!selectedRecipe ? (
        <RecipeList recipes={recipes} onSelect={setSelectedRecipe} />
      ) : (
        <RecipeDetail recipe={selectedRecipe} onBack={() => setSelectedRecipe(null)} />
      )}
    </div>
  );
}

export default App;
