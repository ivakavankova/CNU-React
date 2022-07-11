import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Spinner, Alert, Row, Col } from 'reactstrap';
import { RecipesEdit } from '../components/RecipeEdit';
import RecipeIngredienceList from '../components/RecipeIngredienceList';

import { api } from '../api';
import { DeleteButton } from '../components/DeleteButton';

// detaily receptu
export function RecipeDetailPage() {
  const { slug } = useParams();
  const [recipe, setRecipe] = useState({});
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    setLoading(true);

    api
      .get(`/recipes/${slug}`)
      .then((res) => setRecipe(res.data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [slug]);

  // spinner behem nacitatni
  if (isLoading) {
    return <Spinner />;
  }

  // chybova hlaska
  if (error) {
    return <Alert color="danger">Vyskytla se chyba při načítání dat</Alert>;
  }

  return (
    <Container>
      <DeleteButton recipe={recipe}/>
      <h1>{recipe.title}</h1>

      <Row>
        <Col lg={4}>
          <h5>{recipe.preparationTime ? (Math.floor(recipe.preparationTime / 60) + ' h' + '  ' + Math.floor(recipe.preparationTime % 60) + '  ' + 'min') : ('?' + ' h' + '  ' + '?' + ' min' )}</h5>
          <RecipeIngredienceList recipe={recipe} />
        </Col>
        <Col lg={8}>
          {recipe.directions && recipe.directions.split("\n").map((el, i) => (<p key={i}> {el} </p>))}

        </Col>
      </Row>
      <RecipesEdit recipe={recipe} />

    </Container>
  );
}
