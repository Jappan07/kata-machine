function findBreakingFloor(breaks: boolean[]) {
    const numberOfFloors = breaks.length
    let jumpAmount = Math.sqrt(numberOfFloors)

    let i = jumpAmount

    for (; i < breaks.length; i += jumpAmount) {
        if (breaks[i]) break
    }

    i = i - jumpAmount

    for (let j = 0; j < jumpAmount && i < breaks.length; i++, j++) {
        if (breaks[i]) {
            return i
        }
    }

    return -1

}


export { }
