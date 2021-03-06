function whoseBicycle(firstSon, secondSon, thirdSon) {
  const marks1 = Object.values(firstSon).reduce((acc, value) => acc + value, 0);
  const marks2 = Object.values(secondSon).reduce((acc, value) => acc + value, 0);
  const marks3 = Object.values(thirdSon).reduce((acc, value) => acc + value, 0);

  const myChilds = ["first", "second", "third"];
  const marksArray = [marks1, marks2, marks3];
  const maxMark = Math.max(...marksArray);

  const bestChild = marksArray.lastIndexOf(maxMark);

  return `I will buy a cycle to my ${myChilds[bestChild]} son`;
}

module.exports = whoseBicycle;

