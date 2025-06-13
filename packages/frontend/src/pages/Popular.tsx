import RecipeCard from "../components/RecipeCard";

export default function Popular() {
  const popularRecipes = [
    { id: '1', title: 'Spaghetti Bolognese', image: 'https://www.allrecipes.com/thmb/dsZLQc6y3EWUjSahZkQqqgVerP8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/4511209_-Cubanelle-and-Veal-Bolognese-Photo-by-Buckwheat-Queen-161357d03b224814996c46e44712c147.jpg' },
    { id: '3', title: 'Chicken Curry', image: 'https://www.allrecipes.com/thmb/Jg10XCt9o-5_eXvdpx3BLU30rv4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/1053643-295634ecf1344093987892a016024411.jpg' },
    { id: '6', title: 'Veggie Pizza', image: 'https://www.allrecipes.com/thmb/u2oHaMqWTujkQqt5fyfnEDipkUM=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/AR-15022-veggie-pizza-DDMFS-4x3-hero-3dabf0783ef544eeaa23bdf28b48b178.jpg' }
  ];

  return (
    <main>
      <h1>Popular Recipes</h1>
      <div className="recipe-list">
        {popularRecipes.map(recipe => (
          <RecipeCard key={recipe.id} id={recipe.id} title={recipe.title} image={recipe.image} />
        ))}
      </div>
    </main>
  );
}