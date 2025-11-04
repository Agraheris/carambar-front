import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreateJoke() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!question.trim() || !answer.trim()) {
      setError('Question et réponse sont obligatoires');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('http://localhost:3000/jokes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question, answer }),
      });

      if (response.ok) {
        navigate('/jokes');
      } else {
        setError('Erreur lors de la création');
      }
    } catch (error) {
      setError('Erreur réseau');
      console.error('Erreur:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page">
      <h2>Créer une nouvelle blague</h2>
      
      <form onSubmit={handleSubmit} className="joke-form">
        <div className="form-group">
          <label htmlFor="question">Question</label>
          <input
            type="text"
            id="question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Ex: Pourquoi les plongeurs plongent toujours en arrière ?"
          />
        </div>

        <div className="form-group">
          <label htmlFor="answer">Réponse</label>
          <input
            type="text"
            id="answer"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder="Ex: Parce que sinon ils tombent dans le bateau"
          />
        </div>

        {error && <p className="error">{error}</p>}

        <button type="submit" className="button" disabled={loading}>
          {loading ? 'Création...' : 'Créer la blague'}
        </button>
      </form>
    </div>
  );
}

export default CreateJoke;