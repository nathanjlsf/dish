import { useParams } from 'react-router-dom';

export default function RecipeDetail() {
  const { id } = useParams<{ id: string }>();

  return (
    <main>
      <h1>Recipe ID: {id}</h1>
    </main>
  );
}
