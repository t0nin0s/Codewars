//Write a program that asks for a time under the form of three information
//(hours, minutes, seconds).
//The program calculates and shows the time one second after.
//Incorrect inputs must be taken into account

function followingSecond(userInput) {
  var [second, minute, hour] = userInput.split(",");
  //case midnight
  if (second >= 59 && minute >= 59 && hour >= 23) {
    second = 0;
    minute = 0;
    hour = 0;
    return ` time is ${hour} hours: ${minute} minutes : ${second} seconds`;
  }
  //case hour forward
  if (second >= 59 && minute >= 59) {
    second = 0;
    minute = 0;
    hour++;
    return `time is ${hour} hours: ${minute} minutes : ${second} seconds`;
  }
  //case minute forward
  if (second >= 59) {
    second = 0;
    minute++;
    return `time is ${hour} hours: ${minute} minutes : ${second} seconds`;
  }
  //case seconds + 1
  else {
    return `time is ${hour} hours: ${minute} minutes : ${Number(second) +
      1} seconds`;
  }
}

module.exports = followingSecond;
