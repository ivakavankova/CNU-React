/* eslint-disable jsx-a11y/alt-text */
import { Link } from 'react-router-dom';
import image from '../images/sad.jpg';

// spatna url
export function NotFoundPage() {
  return (
    <div className="text-center">
      <h1>404 - Nalezeno!</h1>
      <h4>Na této adrese nic není.</h4>
      <br></br>
      <img src={image} height={120} width={120} />
      <div className="mt-4">
        <Link to="/" className="btn btn-primary btn-lg" role="button">
          Zpět na hlavní stránku
        </Link>
      </div>
    </div>
  );
}
