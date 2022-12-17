const addAndHandle = (
  num1: number,
  num2: number,
  callback: (result: number) => void
) => {
  const result = num1 + num2;
  callback(result);
};

const result = addAndHandle(1, 2, (result: number) => {
  console.log(result); // 3
  return result;
});

console.log(result); // undefined
