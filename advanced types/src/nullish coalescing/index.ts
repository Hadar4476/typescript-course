// Values like empty strings and 0 are treated as falsey values
// There is a way to tell TS to only treat the value as falsey if it holds: "null", "false" or "undefined"

const userInput = "";

// "dataToStore" will hold an empty string:
const dataToStore = userInput ?? "DEFAULT DATA";

console.log(dataToStore);
