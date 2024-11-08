"use strict";
//Problem 1
function sumArray(input) {
    var sum = 0;
    input.map(function (numbers) { return sum += numbers; });
    return sum;
}
console.log(sumArray([1, 2, 3, 4, 5]));
