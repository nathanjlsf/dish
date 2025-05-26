import { useState } from 'react';
export default function IngredientForm() {
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [input, setInput] = useState('');

  const addIngredient = () => {
    if (input.trim()) setIngredients([...ingredients, input]);
    setInput('');
  };

  const deleteIngredient = (index: number) => {
    const updated = [...ingredients];
    updated.splice(index, 1);
    setIngredients(updated);
  };

  return (
    <div>
      <input value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={addIngredient}>Add</button>
      <ul>
        {ingredients.map((item, i) => (
          <li key={i}>
            {item} <button onClick={() => deleteIngredient(i)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}