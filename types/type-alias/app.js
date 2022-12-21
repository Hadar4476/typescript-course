var combine = function (val1, val2) {
    var result;
    if (typeof val1 === "number" && typeof val2 === "number") {
        result = val1 + val2;
    }
    else {
        result = val1.toString() + val2.toString();
    }
    return result;
};
var combineAges = combine(26, 30);
console.log(combineAges);
var combineNames = combine("Hadar ", "Yamin");
console.log(combineNames);
var person2 = {
    name: "Hadar",
    age: 26,
    gender: "male"
};
