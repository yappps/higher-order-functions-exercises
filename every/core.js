//1. 
// Check to see if all elements in an array
// are even numbers.

/*    traditional Method
function isEvenNumbers(currentValue) {
  return currentValue % 2 === 0;
}
const allEven = input => input.every(isEvenNumbers);
*/ 

const allEven = array => array.every(currentValue => currentValue %2 ===0);  

/*    Solution 
function allEven(input){
  const isEvenNumber = function(num) {
    return num%2 ===0;
  }
  return input.every(isEvenNumbers);
}
*/


// Check to see if every element in the matrix is
// an array and that every element in the array is
// greater than 0.

function isAnArrayAndGreaterThan0(currentRow) {
  return Array.isArray(currentRow) && currentRow.every(element => element > 0);
}
const positiveMatrix = matrix => matrix.every(isAnArrayAndGreaterThan0);


/*  solution
function positiveMatrix(inputMatrix) {
  const isPositiveRow = function(row) {
    return row.every(num => num > 0);
  };
  return inputMatrix.every(isPositiveRow);
}
*/
 
module.exports = {
  allEven,
  positiveMatrix
};
