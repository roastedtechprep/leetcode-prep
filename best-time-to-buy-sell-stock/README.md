# Best Time to Buy and Sell Stock

# Problem

You are given an array `prices` where `prices[i]` is the price of a given stock on the `ith` day.

You want to maximize your profit by choosing a **single day** to buy one stock and choosing a **different day in the future** to sell that stock.

Return *the maximum profit you can achieve from this transaction*. If you cannot achieve any profit, return `0`.

**Example 1:**

```
Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
```

# Approach

We have to find the maximum profit, however there is a simple catch. Simply we can think if we can just subtract the min number from the max number, we will get the maximum profit. This is correct however not entirely. Here’s why - 

`[7,1,5,3,6,4]` each item in this array represents the price of that `[indexed]` day. `array[0]` is `7` which represents the `1st` day of the stock market, where the stock’s price is `7`. In this example array, the min value is `1` on `2nd` day and max value is `7` on `1st` day. Naturally we can buy a stock on 2nd day for the lowest market rate, however we can’t travel back in time and sell the same stock on the 1st or any previous days. Hence, in this case, just calculating the max profit by subtracting min from max value does not work.

To mitigate this problem, we can initialize two pointers to the first and second index of the array. First pointer, `left` will represent `buy` and second pointer, `right` will represent `sell`. And alongside them, `maxProfit` variable will declared as well, and we will initialized it to `0`.

```jsx
let left = 0   // buy stock, pointed to 7, prices[0]
let maxProfit = 0   // we don't want to store negative value

// we will define and declare right inside our for loop
let right = 1  // sell stock, pointed to 1, prices[1]
```

Now it is time to iterate the array with `for loop`. Here’s the scenarios that will determine the maximum profit - 

# Steps

formula - `prices[right] - prices[left] = profit`

`prices[left] = 7, prices[right] = 1, profit = -6`

Price left is higher than price right, which returns the profit in negative margin. We will move the left pointer to the right and increment right pointer’s position by 1.

`prices[left] = 1, prices[right] = 5, profit = 4`

Price left is lower than the price right, and our profit is in positive margin. We will update the `maxProfit` with `4`. And increment the right pointer alone as we want our left pointer to always point at the minimum value.

`prices[left] = 1, prices[right] = 3, profit = 2`

Price left is lower than the price right, and we make profit here. So we will check the current `profit` with our `maxProfit` and keep the value that returns the `max` profit, and again we move the right pointer alone.

`prices[left] = 1, prices[right] = 6, profit = 5`

Price left is lower than the price right, and we make profit here. So we will check the current `profit` with our `maxProfit` , our max profit from previous step was `4` and in this step is `5`. Hence we will keep the value that returns the `max` profit (`5`), and again we move the right pointer alone.

`prices[left] = 1, prices[right] = 4, profit = 3`

Same logic as the previous ones. We will run this loop until the array length runs out of indexes.

# Complexity

| Time Complexity | O(n); worse case, we need to iterate over every item in the string |
| --- | --- |
| Space Complexity | O(1); we are only storing one value |

# Solution using JavaScript

```jsx
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let left = 0
    let maxProfit = 0

    for (let right = 1; right < prices.length; right++) {
        if (prices[left] < prices[right]) {
            let profit = prices[right] - prices[left]
            maxProfit = Math.max(maxProfit, profit)
        } else {
            left = right
        }
    }

    return maxProfit;
}
```

| Runtime | 89ms | Beats | 72% |
| --- | --- | --- | --- |
| Memory | 52 MB | Beats | 17.95% |

# Alternative Solution using TypeScript

```tsx
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
```

| Runtime | 91 ms | Beats | 81.92% |
| --- | --- | --- | --- |
| Memory | 51.9 MB | Beats | 63.91% |
