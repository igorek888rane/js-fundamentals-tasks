const addByX = numOne => (numTwo) => numOne + numTwo


const addByTwo = addByX(2)
console.log(addByTwo(3));
console.log(addByTwo(5));

const addByFour = addByX(4)
console.log(addByFour(3));
console.log(addByFour(5));




