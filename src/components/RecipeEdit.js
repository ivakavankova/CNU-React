/* instrukce
•	snazte sa mysliet komponentovo ako sme si to ukazali na workshope (napr. RecipeList atd.)
•	ako vyzeraju data si mozete pozriet tu https://exercise.cngroup.dk/api/recipes, pripadne priamo cez URL. https://exercise.cngroup.dk/api/recipes/brownies
•	ingrediencie su zlozitejsia zalezitost (pridanie/odobratia do/z array), rozhodne sa na tom nezaseknite a urobte vsetko ostatne (povinne)
•	API je pripravene tak ze ak nastavite hodnoty tym properties, ktore mu poslete (tzn. ak mu v POST na "/recipes/:slug" poslete iba { title: ‘New Title’ },
  tak sa nastavi len title a ostane ostanu rovnake
•	ako sme spominali, bolo by vhodne si vybrat jeden recept ktory budete editovat (resp testovat na nom) aby ste si navzajom nemenili data
•	ak by vam dosli pouzitelne recepty, tak databaza sa obnovuje kazdy den rano
*/

import { Input, Button } from 'reactstrap';
import { Row, Col } from 'reactstrap';
import { RecipeCard } from './RecipeCard';
import { Card, CardBody, CardTitle, CardSubtitle, CardImg } from 'reactstrap';
import { Link } from 'react-router-dom';


export function RecipesEdit({ props }) {
  return (<Button  placeholder="Editovat" {...props} />);

}
