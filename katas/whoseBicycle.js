const diary1 = {
  algebra: 10,
  history: 1,
  physics: 1,
  geography: 1,
  chemistry: 1
};
const diary2 = {
  algebra: 6,
  history: 1,
  physics: 1,
  geography: 1,
  chemistry: 1
};

const diary3 = {
  algebra: 50,
  history: 1,
  physics: 1,
  geography: 1,
  chemistry: 1
};

function whoseBicycle(diary1, diary2, diary3) {
  const marks1 = Object.values(diary1).reduce((acc, value) => acc + value, 0);
  const marks2 = Object.values(diary2).reduce((acc, value) => acc + value, 0);
  const marks3 = Object.values(diary3).reduce((acc, value) => acc + value, 0);

  const myChilds = ["first", "second", "third"];
  const marksArray = [marks1, marks2, marks3];
  const maxMark = Math.max(...marksArray);

  const bestChild = marksArray.lastIndexOf(maxMark);

  return isNaN(marks1) || isNaN(marks1) || isNaN(marks1)
    ? "strings not accepted"
    : `I will buy a cycle to my ${myChilds[bestChild]} son`;
}

module.exports = whoseBicycle;
