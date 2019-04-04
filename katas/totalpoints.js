function points(games) {
  let score = games.reduce((acc, result) => {
    let goal = result.split(":");

    if (goal[0] > goal[1]) {
      acc += 3;
    } else if (goal[0] === goal[1]) {
      acc += 1;
    }
    return acc;
  }, 0);
  return score;
}

module.exports = points;
