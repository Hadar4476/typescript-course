// Function overloads:
// - Describes the type of a returned value from a function according to parameters types
// - Solves an issue with type casting a returned value from a function, EXAMPLE: combine(1,2) as number
// - Can only work on regular functions(not arrow functions)

type Combinable2 = string | number;

// Overloads before function definition:
function combine(a: number, b: number): number;
function combine(a: string, b: string): string;
function combine(a: string, b: number): string;
function combine(a: number, b: string): string;

// Definition:
function combine(a: Combinable2, b: Combinable2) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }

  return a + b;
}
