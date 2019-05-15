function theOffice(meet, boss) {
  const bossSinglePoints = meet[boss];
  const bossDoublePoints = bossSinglePoints * 2;
  const ratings = Object.values(meet).reduce((acc, item) =>
    acc + item, 0)
  return (ratings - bossSinglePoints + bossDoublePoints) <= 50 ?
    'Get Out Now!'
    : 'Nice Work Champ!';
}

module.exports = theOffice;
