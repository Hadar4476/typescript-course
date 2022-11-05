// "!" will never yield "null" value
const button = document.getElementById("add_button")! as HTMLButtonElement;
const input1 = document.getElementById("num_1")! as HTMLInputElement;
const input2 = document.getElementById("num_2")! as HTMLInputElement;

// assigning types for function's parameters
const add = (num1: number, num2: number) => {
  return num1 + num2;
};

button.addEventListener("click", () => {
  const result = add(+input1.value, +input2.value);

  console.log(result);
});
