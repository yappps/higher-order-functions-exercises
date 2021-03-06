//1. onlyEven

/* Method 1
function onlyEven(array) {
  return array.filter(currentValue => currentValue % 2 === 0);
}
*/
// Method 2
const onlyEven = array => array.filter(currentValue => currentValue % 2 === 0);

// 2. onlyOneWord

/* traditional method 
function noSpaceWord(string){
  return string.search(/\s/) === -1; 
}
function onlyOneWord(array) {
  return array.filter(noSpaceWord); 
}
*/

// COMMENT: you're really close! you can use console.logs or the debugger to get visibility/feedback into what the code is doing
const onlyOneWord = array =>
  array.filter(string => {
    console.log(string.search(/\s/));
    return string.search(/\s/) === 1;
  });

// 3.
function positiveElements(element) {
  return element > 0;
}
function positiveRows(row) {
  return row.every(positiveElements);
}
function positiveRowsOnly(matrix) {
  return matrix.filter(positiveRows);
}

//4.
function truthyValuesOnly(array) {
  return array.filter(currentValue => (currentValue ? true : false));
}

module.exports = {
  onlyEven: onlyEven,
  onlyOneWord: onlyOneWord,
  positiveRowsOnly: positiveRowsOnly,
  truthyValuesOnly: truthyValuesOnly
};
