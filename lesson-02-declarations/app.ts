const add = (num1, num2, shouldLogResult, resultText) => {
  const result = num1 + num2;

  if (shouldLogResult) {
    console.log(resultText + result);
  }

  return result;
};

let num1 = 5;
// num1 = "5"; // ERROR: Type 'string' is not assignable to type 'number'

let num2: number;
num2 = 4.5;
// num2 = "4.5" // ERROR: Type 'string' is not assignable to type 'number'

const shouldLogResult: boolean = true;

const resultText = "Result is: ";

add(num1, num2, shouldLogResult, resultText);
