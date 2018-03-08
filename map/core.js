// 1.
const multiplyBy10 = array => array.map(x => x * 10);

//2.
const onlyVowels = array => array.map(x => x.replace(/[^aeiou]/gi, ""));

//3.
function ArrayRow(row){
  return row.map(x=> x*2);
}

function doubleMatrix(matrix){
  return matrix.map(ArrayRow); 
}

// const doubleMatrix = arrayRow => arrayElement => arrayElement.map(x => x * 2);

//4.
const onlyNames = array => array.map(obj => obj["name"]);
module.exports = {
  multiplyBy10: multiplyBy10,
  onlyVowels: onlyVowels,
  doubleMatrix: doubleMatrix,
  onlyNames: onlyNames
};
