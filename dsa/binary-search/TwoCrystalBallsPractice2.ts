function findBreakingFloor(breaks: boolean[]) {
    let jumpAmount = Math.sqrt(breaks.length)
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
