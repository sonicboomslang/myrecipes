function RecipeDetail({ recipe, onBack }) {
    return (
      <div className="recipe-detail">
        <button onClick={onBack}>← Back</button>
        <h2>{recipe.strMeal}</h2>
        <img src={recipe.strMealThumb} alt={recipe.strMeal} />
        <p><strong>Category:</strong> {recipe.strCategory}</p>
        <p><strong>Instructions:</strong></p>
        <p>{recipe.strInstructions}</p>
      </div>
    );
  }
  
  export default RecipeDetail;
  