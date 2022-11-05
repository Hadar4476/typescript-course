// <T> is an indicator for forwarding the type to the parameters
// name is optional

const insertAtStart = <T>(array: T[], value: T) => {
  const newArray = [value, ...array];

  return newArray;
};

const numbersArray = [1, 2, 3];
const stringArray = ["a", "b", "c"];

const updatedNumbersArray = insertAtStart(numbersArray, -1);

// Property 'split' does not exist on type 'number'.
updatedNumbersArray[0].split("");

const updatedStringsArray = insertAtStart(stringArray, "d");

// this will work
updatedStringsArray[0].split("");
