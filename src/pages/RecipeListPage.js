import { useEffect, useState } from 'react';
import { Container, Spinner, Alert } from 'reactstrap';
import { api } from '../api';
import { SearchInput } from '../components/SearchInput';
import { RecipesList } from '../components/RecipesList';

// recepty
export function RecipeListPage() {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [searchValue, setSearchValue] = useState('');

  const filterredRecipes = recipes.filter((recipe) =>
    recipe.title.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().includes(searchValue.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()),
  ).sort((a,b) => a.preparationTime - b.preparationTime);

  useEffect(() => {
    setLoading(true);

    api
      .get('/recipes')
      .then((res) => setRecipes(res.data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <Container>
      <h1>Recepty</h1>
      <SearchInput
        className="mb-4"
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
      />
      {isLoading && <Spinner className="mb-4" />}
      {error && (
        <Alert color="danger" >Vyskytla se chyba při načítání dat.</Alert>
      )}
      <RecipesList recipes={filterredRecipes} />
    </Container>
  );
}



