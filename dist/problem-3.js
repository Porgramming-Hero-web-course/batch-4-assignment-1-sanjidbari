"use strict";
// Problem 3
function countWordOccurrences(input, word) {
    var count = 0;
    var temp;
    var words = input.split(' ');
    var newArr = words.filter(function (w) { return w === word; }).length;
    console.log(newArr);
    return 0;
}
countWordOccurrences('I dont know he also dont know know know', 'know');
