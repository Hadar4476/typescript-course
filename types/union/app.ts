const combine = (val1: number | string, val2: number | string) => {
  let result;

  if (typeof val1 === "number" && typeof val2 === "number") {
    result = val1 + val2;
  } else {
    result = val1.toString() + val2.toString();
  }

  return result;
};

const combineAges = combine(26, 30);
console.log(combineAges);

const combineNames = combine("Hadar ", "Yamin");
console.log(combineNames);
