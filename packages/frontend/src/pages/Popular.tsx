import RecipeCard from "../components/RecipeCard";

export default function Popular() {
  const popularRecipes = [
    { id: '1', title: 'Spaghetti Bolognese' },
    { id: '3', title: 'Chicken Curry' },
    { id: '6', title: 'Veggie Pizza' }
  ];

  return (
    <main>
      <h1>Popular Recipes</h1>
      <div className="recipe-list">
        {popularRecipes.map(recipe => (
          <RecipeCard key={recipe.id} id={recipe.id} title={recipe.title} />
        ))}
      </div>
    </main>
  );
}