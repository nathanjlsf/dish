import { Link } from 'react-router-dom';

interface Props {
  id: string;
  title: string;
  image: string;
}

export default function RecipeCard({ id, title, image }: Props) {
  return (
    <Link to={`/recipe/${id}`} className="recipe-card" style={{ textDecoration: 'none', color: 'inherit' }}>
      <div style={{
        border: '1px solid #ccc',
        borderRadius: '8px',
        overflow: 'hidden',
        width: '250px',
        textAlign: 'center',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
      }}>
        <img
          src={image}
          alt={title}
          style={{ width: '100%', height: '150px', objectFit: 'cover' }}
        />
        <h3 style={{ padding: '0.5rem' }}>{title}</h3>
      </div>
    </Link>
  );
}
