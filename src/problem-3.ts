// Problem 3

function countWordOccurrences(input: string, word: string): void {
    const words: string[] = input.split(' ');
    const count: number = words.filter(w => w === word).length;
    return console.log(count);
}

countWordOccurrences("I love typescript", "typescript");