const numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const oddNums = numberList.filter(odd => odd % 3 === 0);
const div2or5 = numberList.filter(num => num % 2 === 0 || num % 5 === 0);
const divSquare = numberList.filter(num => num % 3 === 0).map(x => x  ** 2);
const sumDivSquare =  numberList.filter(num => num % 5 === 0).map(x => x  ** 2).reduce((a, b) => a + b, 0);

console.log(oddNums);
console.log(div2or5);
console.log(divSquare);
console.log(sumDivSquare);