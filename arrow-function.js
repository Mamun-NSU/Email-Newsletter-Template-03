// Arrow function
const add = (num1 = 0, num2 = 0) => num1 + num2;

const calculation1 = add(10, 15);
const calculation2 = add();


console.log(calculation1, calculation2);
