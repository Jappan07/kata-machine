function copyArrayAndManipulate(arr: number[], action: (num: number) => number): number[] {
    let output: number[] = [];

    for (let i = 0; i < arr.length; i++) {
        output[i] = action(arr[i]);
    }

    return output;
}

function multiplyBy2(num: number): number {
    return num * 2;
}

function divideBy2(num: number): number {
    return num / 2
}


console.log(copyArrayAndManipulate([1, 2, 3, 4], multiplyBy2))
console.log(copyArrayAndManipulate([1, 2, 3, 4], divideBy2))
