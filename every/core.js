// Check to see if all elements in an array
// are even numbers.

function isEvenNumbers(currentValue) {
  return currentValue % 2 === 0;
}
const allEven = input => input.every(isEvenNumbers);
// another method: input.every(element=> element %2 ===0)

// Check to see if every element in the matrix is
// an array and that every element in the array is
// greater than 0.

function isAnArrayAndGreaterThan0(currentRow) {
  return Array.isArray(currentRow) && currentRow.every(element => element > 0);
}
const positiveMatrix = matrix => matrix.every(isAnArrayAndGreaterThan0);

module.exports = {
  allEven,
  positiveMatrix
};
