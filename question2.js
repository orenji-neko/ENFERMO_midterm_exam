const sumArray = (arr = []) => 
  arr.reduce((acc, cur) => acc + cur);

console.log(`sumArray([1, 2, 3, 4, 5]) \nResult: ${sumArray([1, 2, 3, 4, 5])}`);