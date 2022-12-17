let unkownType1: unknown;

unkownType1 = 5;
unkownType1 = true;
unkownType1 = "Hello";

let unkownType2: unknown;
let strType: string;

unkownType2 = 3;
unkownType2 = "World";
strType = unkownType2; // ERROR: because "unkownType2" is considered as "unkown" type.

if (typeof unkownType2 === "string") {
  strType = unkownType2; // WORKS: because a check was done before the reassigment.
}
