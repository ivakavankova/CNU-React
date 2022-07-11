import { useState } from 'react';
import { api } from '../api';
import { useNavigate } from "react-router-dom";

// editace receptu
export function RecipesEdit({ recipe }) {
  let history = useNavigate();
  const [name, setName] = useState(recipe.title);

  let onSubmit = ((e) => {
    e.preventDefault();
    api
      .post(`/recipes/${recipe._id}`, {...recipe, title:name}      )
      .then((res) => history(`/recipe/${res.data.slug}`))
      .catch((error) => console.error(error))
  });

  return (
    <form onSubmit={onSubmit}>
      <label>
        Změna názvu: {' '}
        <input type="text" name="name" value={name} onChange={e => setName(e.target.value)} />
      </label>
      <input type="submit" value="Upravit" />
    </form>
    );
}
