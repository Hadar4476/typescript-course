const simple = () => {
  return "123";
};

const add = (num1: number, num2: number): number => {
  return num1 + num2;
};

const printResult = (result: number): void => {
  console.log(result);
};

let func1: Function;

func1 = add;
func1 = 1;

func1(1, 2); // ERROR: func1 should be a function type and not a number.

let func2: () => string;

func2 = simple; // WORKS: because func2 type should be a function which returns a string.
func2 = add; // ERROR: because func2 is not a type of a function with no parameters and which returns a number.

let func3: (a: number, b: number) => number;

func3 = add; // WORKS: because func3 is a type of function with 2 parameters as numbers and which returns a number, same as "add" function.
func3 = printResult; // ERROR: because "printResult" is a function which receives 1 parameters and returns nothing.
