import { useNavigate } from "react-router-dom";
import { api } from '../api';

// smazani receptu
export function DeleteButton({ recipe }) {

  let history = useNavigate();

  let onSubmit = ((e) => {
    e.preventDefault();
    api
      .delete(`/recipes/${recipe._id}`)
      .then((res) => history(`/`))
      .catch((error) => console.error(error))
  });

  return (
    <form onSubmit={onSubmit}>
      <input type="submit" value="Smazat" style={{ color: "black", backgroundColor: "red" }} />
    </form>
    )

}
