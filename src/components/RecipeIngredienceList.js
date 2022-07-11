import { List } from 'reactstrap';

// ingredience
export default function RecipeIngredienceList({ recipe }) {

  return (
    <List type="unstyled">
      {recipe.ingredients?.map((ingredient) => (
        <li key={ingredient._id}>
          {ingredient.amount} {ingredient.amountUnit} - {ingredient.name}
        </li>
      ))}
    </List>
  );
}





