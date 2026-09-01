function maxProfit(prices: number[]) {
    let maxProfit = 0
    let minPrice = Infinity

    for (const price of prices) {
        minPrice = Math.min(minPrice, price)
        const currentProfit = price - minPrice
        maxProfit = Math.max(maxProfit, currentProfit)
    }

    return maxProfit

}

export { }
