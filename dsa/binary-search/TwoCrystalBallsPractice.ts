function findBreakingFloor(breaks: boolean[]) {
    const jumpAmount = Math.ceil(Math.sqrt(2))
    let i = jumpAmount

    for (; i < breaks.length; i += jumpAmount) {
        if (breaks[i]) break
    }


    // 1 jump back
    i = i - jumpAmount

    for (let j = 0; j <= jumpAmount && i < breaks.length; j++) {
        if (breaks[i]) {
            return i
        }
    }

    return -1
}
