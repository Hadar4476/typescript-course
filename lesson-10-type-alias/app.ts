// using built-in:
type Combinable = number | string;

const combine = (val1: Combinable, val2: Combinable) => {
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

// using literal:
type Genders = "male" | "female";

const person2: { name: string; age: number; gender: Genders } = {
  name: "Hadar",
  age: 26,
  gender: "male",
};
