import { Link } from 'react-router-dom';
interface Props {
  id: string;
  title: string;
}
export default function RecipeCard({ id, title }: Props) {
  return <Link to={`/recipe/${id}`} className="recipe-card">{title}</Link>;
}
