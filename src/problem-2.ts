//Problem 2

function removeDuplicates(nums: number[]): number[] {
    let newNums: number[] = [];
    let temp: number;
    nums.forEach(num => {
        if (num !== temp) {
            newNums.push(num);
            temp = num;
        }
    });

    return newNums;
}

const arr: number[] = [1, 2, 2, 3, 4, 4, 5];

console.log(removeDuplicates(arr));
