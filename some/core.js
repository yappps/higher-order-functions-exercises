// 1.
// Check to see if any of the elements in the
// array are numbers greater than 10.
function anyGreaterThan10(array) {
  return array.some(element => element > 10);
}

//2.
// Check to see if any of the strings in
// the array is longer than 10 characters.
function longWord(array) {
  var ans = array.some(word => word.length > 10);
  return ans;
}

//3.
// Check to see if any of the elements in
// the matrix are true.
/*  Traditional 
function postiveElement(num) {
  return num === true;
}
function positiveRow(row) {
  return row.some(postiveElement);
}
function truePossibilities(matrix) {
  return matrix.some(positiveRow);
}
*/
const truePossibilities = matrix =>
  matrix.some(row => row.some(num => num === true));
  // COMMENT: num can be better named
//4.
// Check to see if 'Lost' is in
// the phrase (using some).

/*    traditional method
function lostCarcosa(array) {
  return array.some(string => /Lost/.test(string)); 
  // note: regex.test(string) will return T / F
}
*/

const lostCarcosa = array => array.some(string => /Lost/.test(string));
// note: regex.test(string) will return T / F

module.exports = {
  anyGreaterThan10,
  longWord,
  truePossibilities,
  lostCarcosa
};
