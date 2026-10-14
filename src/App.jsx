import React, { useState } from 'react';
import { players, ranks, updateRanking } from './ranking.js';

function BasketballCard() {
  const [ranking, setRanking] = useState(['', '', '']);
  const selectedCount = ranking.filter(Boolean).length;
  const complete = selectedCount === 3;

  return (
    <article className="card" aria-labelledby="question">
      <div className="card-heading">
        <span className="eyebrow">THE ALL-TIME DEBATE</span>
      </div>
      <h1 id="question">Who is the best<br />basketball player?</h1>
      <p className="intro">Three legends. Your order. Pick your personal top three.</p>

      <div className="rankings">
        {ranks.map((rank, index) => (
          <div className="ranking-row" key={rank}>
            <span className={`rank-number rank-${index}`} aria-hidden="true">0{index + 1}</span>
            <div className="field">
              <label htmlFor={`rank-${index}`}>{rank} place <span>{['The greatest', 'The runner-up', 'Rounding out the podium'][index]}</span></label>
              <select
                id={`rank-${index}`}
                value={ranking[index]}
                onChange={event => setRanking(current => updateRanking(current, index, event.target.value))}
              >
                <option value="">Choose a player</option>
                {players.map(player => (
                  <option key={player} value={player} disabled={ranking.some((value, position) => position !== index && value === player)}>{player}</option>
                ))}
              </select>
            </div>
          </div>
        ))}
      </div>

      <div className="status" role="status" aria-live="polite">
        <span className={`status-dot ${complete ? 'complete' : ''}`} />
        {complete ? 'Your top three is set.' : `${selectedCount} of 3 selected. Each player gets one spot.`}
      </div>
      {complete && (
        <div className="result">
          <p className="eyebrow">YOUR STARTING LEGENDS</p>
          <ol>{ranking.map(player => <li key={player}>{player}</li>)}</ol>
        </div>
      )}
      <button className="reset" type="button" onClick={() => setRanking(['', '', ''])}>Reset</button>
    </article>
  );
}

export default function App() {
  return (
    <main>
      <header className="brand">COURTSIDE <span className="brand-divider">/</span> <span className="brand-subtitle">YOUR GAME. YOUR TAKE.</span></header>
      <div className="page-content">
        <p className="edition">BASKETBALL / THE BIG QUESTION</p>
        <BasketballCard />
        <footer>No wrong answers. Just a great basketball debate.</footer>
      </div>
    </main>
  );
}
