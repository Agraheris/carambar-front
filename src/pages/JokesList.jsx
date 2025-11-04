import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function JokesList() {
  const [jokes, setJokes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJokes = async () => {
      try {
        const response = await fetch('http://localhost:3000/jokes');
        const data = await response.json();
        setJokes(data);
      } catch (error) {
        console.error('Erreur:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchJokes();
  }, []);

  if (loading) return <div className="page">Chargement...</div>;

  return (
    <div className="page">
      <h2>Toutes les blagues</h2>
      <div className="jokes-grid">
        {jokes.map((joke) => (
          <Link to={`/jokes/${joke.id}`} key={joke.id} className="joke-card-link">
            <div className="joke-card">
              <h3 className="question">{joke.question}</h3>
              <p className="read-more">Voir la réponse →</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default JokesList;