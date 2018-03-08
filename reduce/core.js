// 1.  (solution) 
function sum(array) {
  const callback = (accumulator, currentArrayElement) =>
    accumulator + currentArrayElement;
  return array.reduce(callback, 0);
}

//2. 
function rowReducer(accumulator, currentArray) {
    console.log(accumulator.concat(currentArray));
    return accumulator.concat(currentArray);
}
function productofElementsInArray(accumulator,currentNumber) {
  return accumulator*currentNumber;
}
function productAll(matrix){
  // const wrongResult = rowReducer(matrix);
  // return matrix.productofElementsInArray(wrongResult); 
    const flatten_array=matrix.reduce(rowReducer);
    return flatten_array.reduce(productofElementsInArray);
}

// soltion: Method 1
/*
function productALl(matrix) {
  const rowReducer = (accumulator, currentRow) => {
    return accumulator.concat(currentRow);
  };

  const getProductOfNumbers = (accumulator, currentNumber) => {
    return accumulator * currentRow;
  };
  return matrix.reduce(rowReducer, []).reduce(getProductOfNumbers, 1);
}
*/ 
//3.  
function luckyNumbers(array) {
  var print = "Your lucky numbers are: ";
  const reducer = (accumulator, currentNumber) => accumulator + currentNumber + (array[array.length-1]== currentNumber? ".": ", "); 
  return array.reduce(reducer,print);
}

module.exports = {
  sum: sum,
  productAll: productAll,
  luckyNumbers: luckyNumbers
};
