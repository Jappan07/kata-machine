function maxProfit(prices: number[]): number {
    let maxProfit = 0;
    let minPrice = Infinity

    for (const price of prices) {
        minPrice = Math.min(minPrice, price)
        const profit = price - minPrice
        maxProfit = Math.max(profit, maxProfit)
    }

    return maxProfit
};
