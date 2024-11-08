function sumArray(input: number[]):number {
    var sum = 0;
    input.map(numbers => sum = sum + numbers);
    return sum;
}

console.log(sumArray([1, 2, 3, 4, 5]));