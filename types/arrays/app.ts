const items: string[] = ["chair", "couch", "table"];

// OPTIONAL: can also be declared like this:
// const items = ["chair", "couch", "table"];

console.log(items);

for (const item of items) {
  console.log(item.toUpperCase());
  // console.log(item.toFixed()); // ERROR: Property 'toFixed' does not exist on type 'string'
}
