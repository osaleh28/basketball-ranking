export const players = ['Kobe Bryant', 'Michael Jordan', 'LeBron James'];
export const ranks = ['1st', '2nd', '3rd'];

export function updateRanking(current, index, player) {
  if (!Number.isInteger(index) || index < 0 || index > 2) return current;
  if (player !== '' && !players.includes(player)) return current;
  if (player && current.some((value, position) => position !== index && value === player)) return current;
  return current.map((value, position) => position === index ? player : value);
}
