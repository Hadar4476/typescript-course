var items = ["chair", "couch", "table"];
// OPTIONAL: can also be declared like this:
// const items = ["chair", "couch", "table"];
console.log(items);
for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
    var item = items_1[_i];
    console.log(item.toUpperCase());
    // console.log(item.toFixed()); // ERROR: Property 'toFixed' does not exist on type 'string'
}
