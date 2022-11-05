var button = document.getElementById("add_button");
var input1 = document.getElementById("num_1"); // "!" will never yield "null" value
var input2 = document.getElementById("num_2");
var add = function (num1, num2) {
    return num1 + num2;
};
button.addEventListener("click", function () {
    var result = add(+input1.value, +input2.value);
    console.log(result);
});
