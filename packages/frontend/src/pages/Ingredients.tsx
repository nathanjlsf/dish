import { useState } from "react";

interface Props {
  ingredients: string[];
  setIngredients: (ing: string[]) => void;
}

export default function Ingredients({ ingredients, setIngredients }: Props) {
  const [input, setInput] = useState('');

  const addIngredient = () => {
    if (input && !ingredients.includes(input)) {
      const updated = [...ingredients, input];
      setIngredients(updated);
      localStorage.setItem("ingredients", JSON.stringify(updated));
      setInput('');
    }
  };

  const removeIngredient = (ingredientToRemove: string) => {
    const updated = ingredients.filter(ing => ing !== ingredientToRemove);
    setIngredients(updated);
    localStorage.setItem("ingredients", JSON.stringify(updated));
  };

  return (
    <div>
      <h1>My Ingredients</h1>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={addIngredient}>Add</button>
      <ul>
        {ingredients.map((ing, i) => (
          <li key={i}>
            {ing}
            <button onClick={() => removeIngredient(ing)} style={{ marginLeft: '0.5rem' }}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
