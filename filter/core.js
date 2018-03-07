

// 1. onlyEven
function onlyEven(array){
  let new_array = array.filter(currentValue => (currentValue % 2 === 0));
  return new_array;
}
// ?? const onlyEven = array.filter(currentValue => (currentValue % 2===0) );
  
// 2. onlyOneWord
function onlyOneWord(array){
  let new_array= array.filter(currentValue => !currentValue.search(/\s/g));
  return new_array; 
}

function positiveRowsOnly(array) {
  let new_arrays= array.filter(currentRowArray => currentRowArray.filter(currentElement => currentElement > 0));

  return new_arrays; 
}


function truthyValuesOnly(array) {
  let new_array = array.filter(currentElement => typeof currentElement !== "undefined"); 

  return new_array;
}

module.exports = {
  onlyEven: onlyEven,
  onlyOneWord: onlyOneWord,
  positiveRowsOnly: positiveRowsOnly,
  truthyValuesOnly: truthyValuesOnly
};
