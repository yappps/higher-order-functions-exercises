// 1.
var sum = array => array.reduce((prev, curr) => prev + curr);

//2  （wrong)
var newArray_flattened = array.reduce(
  (accArray, curArray) => accArray.concat(curArray),
  []
);
var productAll = newArray_flattened =>
  newArray_flattened.reduce((pre, curElement) => pre * curElement);


//3.  ??
function luckyNumbers(array) {
  var print = "Your lucky numbers are: ";

}

module.exports = {
  sum: sum,
  productAll: productAll,
  luckyNumbers: luckyNumbers
};
