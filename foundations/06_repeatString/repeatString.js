const repeatString = function (string, num) {
  let finalString = "";

  if (num < 0) {
    return "ERROR";
  } else {
    for (let i = 0; i < num; i++) {
      finalString = finalString + string;
    }
  }

  return finalString;
};

// Do not edit below this line
module.exports = repeatString;

// ---------------------------- Logic ---------------------------- //
// make a result string
// run a loop for given number of times
// each time the loop is run add the string to the result string
