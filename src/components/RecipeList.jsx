function RecipeList({ recipes, onSelect }) {
    return (
      <div className="recipe-list">
        {recipes?.map((recipe) => (
          <div key={recipe.idMeal} onClick={() => onSelect(recipe)} className="recipe-card">
            <img src={recipe.strMealThumb} alt={recipe.strMeal} />
            <h3>{recipe.strMeal}</h3>
          </div>
        ))}
      </div>
    );
  }
  
  export default RecipeList;
  