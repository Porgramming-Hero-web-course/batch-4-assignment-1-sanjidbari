"use strict";
// Problem 8
function validateKeys(obj, keys) {
    return keys.every(function (key) { return key in obj; });
}
var person1 = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(validateKeys(person1, ["name", "age"]));
