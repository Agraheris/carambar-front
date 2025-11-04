import { useState } from 'react';
import './JokeCard.css';

function JokeCard({ joke }) {
  const [isFlipped, setIsFlipped] = useState(false);

  if (!joke) return null;

  return (
    <div 
      className={`joke-card ${isFlipped ? 'flipped' : ''}`}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className="joke-card-content">
        {!isFlipped ? (
          <>
            <h3 className="question">{joke.question}</h3>
            <p className="click-hint">👆 Clique pour voir la réponse</p>
          </>
        ) : (
          <>
            <p className="answer-flipped">{joke.answer}</p>
            <p className="click-hint">👆 Clique pour retourner</p>
          </>
        )}
      </div>
    </div>
  );
}

export default JokeCard;