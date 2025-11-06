import { useState } from 'react';
import JokeCard from '../components/JokeCard';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

function Home() {
  const [joke, setJoke] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchRandomJoke = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${API_URL}/jokes/random`);
      const data = await response.json();
      setJoke(data);
    } catch (error) {
      console.error('Erreur:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page">
      <h2>Blague aléatoire</h2>
      <p className="subtitle">Clique pour découvrir une blague Carambar !</p>

      <div className="home-content">
        <button 
          className="button" 
          onClick={fetchRandomJoke}
          disabled={loading}
        >
          {loading ? 'Chargement...' : 'Afficher une blague'}
        </button>

        <JokeCard joke={joke} />
      </div>
    </div>
  );
}

export default Home;