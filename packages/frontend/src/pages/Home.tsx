import { Link } from 'react-router-dom';
import RecipeCard from '../components/RecipeCard';

export default function Home() {
  const recipes = [
    { id: '1', title: 'Spaghetti Bolognese', image: 'https://www.allrecipes.com/thmb/dsZLQc6y3EWUjSahZkQqqgVerP8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/4511209_-Cubanelle-and-Veal-Bolognese-Photo-by-Buckwheat-Queen-161357d03b224814996c46e44712c147.jpg' },
    { id: '2', title: 'Tofu Stir-Fry', image: 'https://www.allrecipes.com/thmb/zEpjF3o54kPojAbuxs_5ewd1f3Y=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/84886orange-beef-style-tofu-stir-fryChefMo4x3-4416bc6b5c9d45bdbbb93e822cbc8090.jpg' },
    { id: '3', title: 'Chicken Curry', image: 'https://www.allrecipes.com/thmb/Jg10XCt9o-5_eXvdpx3BLU30rv4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/1053643-295634ecf1344093987892a016024411.jpg' },
    { id: '4', title: 'Pasta Salad', image: 'https://www.allrecipes.com/thmb/Q-TOp_WDfdiYpqWWYVRuXc2EnN8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/176650-greek-pasta-salad-ddmfs-hero-4x3-ceb96388442c46bc98f439a907439e71.jpg' }
  ];

  const recipes2 = [
    { id: '1', title: 'Spaghetti Bolognese', image: 'https://www.allrecipes.com/thmb/dsZLQc6y3EWUjSahZkQqqgVerP8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/4511209_-Cubanelle-and-Veal-Bolognese-Photo-by-Buckwheat-Queen-161357d03b224814996c46e44712c147.jpg' },
    { id: '3', title: 'Chicken Curry', image: 'https://www.allrecipes.com/thmb/Jg10XCt9o-5_eXvdpx3BLU30rv4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/1053643-295634ecf1344093987892a016024411.jpg' },
    { id: '6', title: 'Veggie Pizza', image: 'https://www.allrecipes.com/thmb/u2oHaMqWTujkQqt5fyfnEDipkUM=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/AR-15022-veggie-pizza-DDMFS-4x3-hero-3dabf0783ef544eeaa23bdf28b48b178.jpg' }
  ];

  return (
    <main>
      <h1>Recipes</h1>
      <div className="hometabs">
        <Link to="/foryou">Recommended</Link>
      </div>
      <div className="recipe-list">
        {recipes2.map((recipe) => (
          <RecipeCard key={recipe.id} id={recipe.id} title={recipe.title} image={recipe.image} />
        ))}
      </div>
      <div className="hometabs">
        <Link to="/popular">Popular</Link>
      </div>
      <div className="recipe-list">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} id={recipe.id} title={recipe.title} image={recipe.image} />
        ))}
      </div>
    </main>
  );
}