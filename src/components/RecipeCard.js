import { Card, CardBody, CardTitle, CardSubtitle, CardImg } from 'reactstrap';
import { Link } from 'react-router-dom';
import placeholder from '../images/food-placeholder.png';
import { useNavigate } from "react-router-dom";

// zobrazeni recipe card
export function RecipeCard({ title, preparationTime, sideDish, slug }) {
  let history = useNavigate();

  return (
    <Card className="h-100">
      <Link to={`/recipe/${slug}`}>
        <CardImg src={placeholder} alt="Preview" top />
      </Link>
      <CardBody style={{cursor: 'pointer'}} onClick={e => history(`/recipe/${slug}`)}>
        <CardTitle tag="h5">{title}</CardTitle>
        <CardSubtitle>  {preparationTime ? (Math.floor(preparationTime / 60) + ' h' + '  ' + Math.floor(preparationTime % 60) + '  ' + 'min') : ('?' + ' h' + '  ' + '?' + ' min' )} </CardSubtitle>
        {sideDish && <CardSubtitle>příloha: {sideDish}</CardSubtitle>}

      </CardBody>
    </Card>

  );
}

