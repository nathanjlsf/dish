import RecipeCard from "../components/RecipeCard";

interface Props {
  ingredients: string[];
}

const allRecipes = [
  { id: '2', 
    title: 'Tofu Stir-Fry', 
    ingredients: ['tofu', 'soy sauce', 'vegetables', 'garlic'], 
    image: 'https://www.allrecipes.com/thmb/zEpjF3o54kPojAbuxs_5ewd1f3Y=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/84886orange-beef-style-tofu-stir-fryChefMo4x3-4416bc6b5c9d45bdbbb93e822cbc8090.jpg' },
  { id: '4', 
    title: 'Pasta Salad', 
    ingredients: ['pasta', 'veggies', 'cheese', 'olives', 'herbs', 'olive oil', 'red wine vinegar'],
    image: 'https://www.allrecipes.com/thmb/Q-TOp_WDfdiYpqWWYVRuXc2EnN8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/176650-greek-pasta-salad-ddmfs-hero-4x3-ceb96388442c46bc98f439a907439e71.jpg' },
  { id: '5', 
    title: 'Egg Fried Rice', 
    ingredients: ['rice', 'eggs', 'water', 'soy sauce', 'carrots', 'corn', 'peas', 'green onion'],
    image: 'https://www.allrecipes.com/thmb/-ksD5Udvqyv_o9i7koLMU1KN718=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/ALR-23298-egg-fried-rice-VAT-4x3-2closeup-ab653366830b41cc8d62627939ccc6c7.jpg' }
];

export default function ForYou({ ingredients }: Props) {
  const matchedRecipes =
    ingredients.length === 0
      ? allRecipes
      : allRecipes.filter(recipe =>
          recipe.ingredients.some(ing => ingredients.includes(ing))
        );

  return (
    <main>
      <h1>Suggested Recipes Based on Your Ingredients</h1>
      <div className="recipe-list">
        {matchedRecipes.map(recipe => (
          <RecipeCard key={recipe.id} id={recipe.id} title={recipe.title} image={recipe.image} />
        ))}
        </div>
    </main>
  );
}