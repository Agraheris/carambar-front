import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import JokeCard from '../components/JokeCard';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

function Joke() {
  const { id } = useParams();
  const [joke, setJoke] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJoke = async () => {
      try {
        const response = await fetch(`${API_URL}/jokes/${id}`);
        const data = await response.json();
        setJoke(data);
      } catch (error) {
        console.error('Erreur:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchJoke();
  }, [id]);

  if (loading) return <div className="page">Chargement...</div>;
  if (!joke) return <div className="page">Blague non trouvée</div>;

  return (
    <div className="page">
      <Link to="/jokes" className="back-link">← Retour à la liste</Link>
      
      <div className="home-content">
        <JokeCard joke={joke} variant="detail" />
      </div>
    </div>
  );
}

export default Joke;