// Create a tuple which should contain 2 items:
// index #0 - should hold a number type
// index #1 - should hold a string type
var tupleArray = [1, "Hadar"];
// this will NOT highlight an error, because push is depracated and can not be tracked by TS
tupleArray.push(2);
tupleArray.push("Yamin");
// ERROR: Type 'number' is not assignable to type 'string'
// because tupleArray index #1 must be a string as declared above.
tupleArray[1] = 10;
// this will work:
tupleArray[1] = "Yamin";
// Type 'true' is not assignable to type 'undefined'
// can not assign a value to a tuple which must only hold 2 items
tupleArray[2] = true;
