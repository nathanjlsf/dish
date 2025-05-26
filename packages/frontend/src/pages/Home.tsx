import RecipeCard from '../components/RecipeCard';

export default function Home() {
  const recipes = [
    { id: '1', title: 'Spaghetti Bolognese' },
    { id: '2', title: 'Tofu Stir-Fry' },
    { id: '3', title: 'Chicken Curry' },
    { id: '4', title: 'Pasta Salad' }
  ];

  return (
    <main>
      <h1>Recommended Recipes</h1>
      <div className="recipe-list">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} id={recipe.id} title={recipe.title} />
        ))}
      </div>
    </main>
  );
}