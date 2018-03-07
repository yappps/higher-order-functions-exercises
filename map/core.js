// 1.
const multiplyBy10 = array => array.map(x => x * 10);

//2.
const onlyVowels = array => array.map(x => x.replace(/[^aeiou]/gi, ""));

//3.
const doubleMatrix = arrayRow => arrayElement => arrayElement.map(x => x * 2);

//4. ???
const onlyNames = array => array.map(x => x["name"]);
module.exports = {
  multiplyBy10: multiplyBy10,
  onlyVowels: onlyVowels,
  doubleMatrix: doubleMatrix,
  onlyNames: onlyNames
};
