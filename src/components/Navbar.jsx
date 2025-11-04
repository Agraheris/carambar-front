import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/"><h1>🍬 Carambar & Co</h1></Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/jokes">Toutes les blagues</Link></li>
        <li><Link to="/create">Créer une blague</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;