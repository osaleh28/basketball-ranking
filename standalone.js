const h = React.createElement;
const players = ['Kobe Bryant', 'Michael Jordan', 'LeBron James'];
const ranks = ['1st', '2nd', '3rd'];

function BasketballCard() {
  const [ranking, setRanking] = React.useState(['', '', '']);
  const selectedCount = ranking.filter(Boolean).length;
  const complete = selectedCount === 3;
  function choose(index, player) {
    setRanking(current => {
      if (player && current.some((value, position) => position !== index && value === player)) return current;
      return current.map((value, position) => position === index ? player : value);
    });
  }
  return h('article', {className: 'card', 'aria-labelledby': 'question'},
    h('div', {className: 'card-heading'}, h('span', {className: 'eyebrow'}, 'THE ALL-TIME DEBATE')),
    h('h1', {id: 'question'}, 'Who is the best', h('br'), 'basketball player?'),
    h('p', {className: 'intro'}, 'Three legends. Your order. Pick your personal top three.'),
    h('div', {className: 'rankings'}, ranks.map((rank, index) =>
      h('div', {className: 'ranking-row', key: rank},
        h('span', {className: `rank-number rank-${index}`, 'aria-hidden': true}, `0${index + 1}`),
        h('div', {className: 'field'},
          h('label', {htmlFor: `rank-${index}`}, `${rank} place`, h('span', null, ['The greatest', 'The runner-up', 'Rounding out the podium'][index])),
          h('select', {id: `rank-${index}`, value: ranking[index], onChange: event => choose(index, event.target.value)},
            h('option', {value: ''}, 'Choose a player'),
            players.map(player => h('option', {key: player, value: player, disabled: ranking.some((value, position) => position !== index && value === player)}, player))))))),
    h('div', {className: 'status', role: 'status', 'aria-live': 'polite'},
      h('span', {className: `status-dot ${complete ? 'complete' : ''}`}),
      complete ? 'Your top three is set.' : `${selectedCount} of 3 selected. Each player gets one spot.`),
    complete && h('div', {className: 'result'}, h('p', {className: 'eyebrow'}, 'YOUR STARTING LEGENDS'), h('ol', null, ranking.map(player => h('li', {key: player}, player)))),
    h('button', {className: 'reset', type: 'button', onClick: () => setRanking(['', '', ''])}, 'Reset'));
}

function App() {
  return h('main', null,
    h('header', {className: 'brand'}, 'COURTSIDE', h('span', {className: 'brand-divider'}, '/'), h('span', {className: 'brand-subtitle'}, 'YOUR GAME. YOUR TAKE.')),
    h('div', {className: 'page-content'}, h('p', {className: 'edition'}, 'BASKETBALL / THE BIG QUESTION'), h(BasketballCard), h('footer', null, 'No wrong answers. Just a great basketball debate.')));
}

ReactDOM.createRoot(document.getElementById('root')).render(h(App));
