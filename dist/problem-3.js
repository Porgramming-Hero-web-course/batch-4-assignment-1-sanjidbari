"use strict";
// Problem 3
function countWordOccurrences(input, word) {
    var words = input.split(' ');
    var count = words.filter(function (w) { return w === word; }).length;
    return console.log(count);
}
countWordOccurrences("I love typescript", "typescript");
