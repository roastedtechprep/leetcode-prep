function maxProfit(prices: number[]): number {
    let left: number = 0;
    let maxProfit: number = 0;

    for (let right: number = 1; right < prices.length; right++) {
        if (prices[left] < prices[right]) {
            let profit: number = prices[right] - prices[left];
            maxProfit = Math.max(maxProfit, profit);
        } else (
            left = right
        )
    }
    return maxProfit;
}
