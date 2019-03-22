/*
Write a program that launches a carousel 
for a number of times given by the user, 
showing the turn number each time.
*/

function carousel(userTurn) {
  turn = 1;

  while (turn <= userTurn) {
    turn++;
    return `this is turn number ${userTurn}`;
  }
}

module.exports = carousel;
