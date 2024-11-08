"use strict";
//Problem 2
function removeDuplicates(nums) {
    var newNums = [];
    var temp;
    nums.forEach(function (num) {
        if (num !== temp) {
            newNums.push(num);
            temp = num;
        }
    });
    return newNums;
}
var arr = [1, 2, 2, 3, 4, 4, 5];
console.log(removeDuplicates(arr));
