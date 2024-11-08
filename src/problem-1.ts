//Problem 1

function sumArray(input: number[]): number {
    let sum = 0;
    input.map(numbers => sum += numbers);
    return sum;
}

console.log(sumArray([1, 2, 3, 4, 5]));
