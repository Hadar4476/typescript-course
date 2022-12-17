const add = (num1: number, num2: number): number => {
  return num1 + num2;
};

const printResult1 = (result: number): void => {
  console.log(result);
};

const printResult2 = (result: number): void => {
  console.log(result);
  return;
};

const printResult3 = (result: number): void => {
  console.log(result);
  return 1; // ERROR: because should return nothing.
};

const doSomething1 = (): undefined => {
  console.log("Would it work?"); // ERROR: should return something which is "undefined".
};

const doSomething2 = (): undefined => {
  return 1; // ERROR: should return a value which is "undefined".
};

const doSomething4 = (): undefined => {
  return undefined;
};

const doSomething3 = (): undefined => {
  let name;

  return name;
};
