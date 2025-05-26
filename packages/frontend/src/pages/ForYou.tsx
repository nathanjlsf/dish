import RecipeCard from "../components/RecipeCard";

export default function ForYou() {
  const suggestions = [
    { id: '2', title: 'Tofu Stir-Fry' },
    { id: '4', title: 'Pasta Salad' },
    { id: '5', title: 'Egg Fried Rice' }
  ];

   return (
    <main>
      <h1>Suggested Recipes Based on Your Ingredients</h1>
      <div className="recipe-list">
        {suggestions.map(recipe => (
          <RecipeCard key={recipe.id} id={recipe.id} title={recipe.title} />
        ))}
      </div>
    </main>
  );
}