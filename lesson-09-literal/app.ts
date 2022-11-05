const person: { name: string; age: number; gender: "male" | "female" } = {
  name: "Hadar",
  age: 26,
  gender: "male",
};

// this will lead to an error:
if (person.gender === "unkown") {
  console.log("gender is unkown");
}
