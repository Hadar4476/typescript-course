var add = function (num1, num2, shouldLogResult, resultText) {
    var result = num1 + num2;
    if (shouldLogResult) {
        console.log(resultText + result);
    }
    return result;
};
var num1 = 5;
// num1 = "5"; // ERROR: Type 'string' is not assignable to type 'number'
var num2;
num2 = 4.5;
// num2 = "4.5" // ERROR: Type 'string' is not assignable to type 'number'
var shouldLogResult = true;
var resultText = "Result is: ";
add(num1, num2, shouldLogResult, resultText);
