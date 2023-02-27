//Coding challenge #1
//Input data
const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};
// 1
const [players1, players2] = game.players;
//2
const [gk, ...fieldPlayers] = players1;
//3
const allPlayers = [...players1, ...players2];
//4
const players1Final = [...players1, 'Thiago', 'Cutinho', 'Periscic'];
//5
const { odds: { team1, x: draw, team2 }, } = game;
//6
const printGoals = function (players) {
    console.log(players);
    console.log(`${players.length} goals were scored`);
};
printGoals(game.scored);
//7
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');
//Challenge #2
//1
for (const [i, player] of game.scored.entries()) {
    console.log(`Goal ${i + 1}: ${player}`);
}
//2
let average = 0;
const odds = Object.values(game.odds);
for (const odd of odds)
    average += odd;
average /= odds.length;
console.log(average);
//3
for (const [team, odd] of Object.entries(game.odds)) {
    const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
    console.log(`Odd of ${teamStr} ${odd}`);
}
// Challenge #3
//Input data
const gameEvents = new Map([
    [17, '⚽️ GOAL'],
    [36, '🔁 Substitution'],
    [47, '⚽️ GOAL'],
    [61, '🔁 Substitution'],
    [64, '🔶 Yellow card'],
    [69, '🔴 Red card'],
    [70, '🔁 Substitution'],
    [72, '🔁 Substitution'],
    [76, '⚽️ GOAL'],
    [80, '⚽️ GOAL'],
    [92, '🔶 Yellow card'],
]);
//1
const events = [...new Set(gameEvents.values())];
console.log(events);
//2
gameEvents.delete(64);
//3
console.log(`An event happened, on average, ever ${90 / gameEvents.size} minutes`);
const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(`An event happened, on average, ever ${time / gameEvents.size} minutes`);
//4
for (const [min, event] of gameEvents) {
    const half = min <= 45 ? 'FIRST' : 'SECOND';
    console.log(`[${half} HALF] ${min}: ${event}`);
}
//Challenge #4
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
// THIS TEST DATA (pasted to textarea)
/*
underscore_case
 first_name
Some_Variable
  calculate_AGE
delayed_departure
*/
// SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
// underscoreCase      ✅
// firstName           ✅✅
// someVariable        ✅✅✅
// calculateAge        ✅✅✅✅
// delayedDeparture    ✅✅✅✅✅
//1
document.querySelector('button').addEventListener('click', function () {
    const text = document.querySelector('textarea').value;
    const rows = text.split('\n');
    console.log(rows);
    for (const [i, row] of rows.entries()) {
        const [first, second] = row.toLowerCase().trim().split('_');
        const output = `${first}${second.replace(second[0], second[0].toUpperCase())} `;
        console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
    }
});
