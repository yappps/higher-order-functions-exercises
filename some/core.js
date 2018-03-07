// 1.
// Check to see if any of the elements in the
// array are numbers greater than 10.
function anyGreaterThan10(input) {
  var ans = input.some(x => x > 10);
  return ans;
}

//2.
// Check to see if any of the strings in
// the array is longer than 10 characters.
function longWord(input) {
  var ans = input.some(x => x.length > 10);
  return ans;
}

//3.
// Check to see if any of the elements in
// the matrix are true.
function truePossibilities(input) {
  return input;
}

//4.
// Check to see if 'Lost' is in
// the phrase (using some).
function lostCarcosa(input) {
  return input;
}

module.exports = {
  anyGreaterThan10,
  longWord,
  truePossibilities,
  lostCarcosa
};
