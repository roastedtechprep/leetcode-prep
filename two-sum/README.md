# Problem

Given an array of integers `nums` and an integer `target`, return indices(indexes) of the two numbers such that they add up to `target`. 

You may assume that each input would have exactly one solution, and you may not use the same element twice.

****************Example:****************

```jsx
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1]
```

# Approach

The way to solve this problem is to iterate over every single item in the `nums` array and find the difference between target and current number being processed.

We will keep the processed items and their index in a map (`nums[i], i`), so that every time we calculate the new difference, we quickly check whether that map has that item or not.

Let’s take 2 and 7 from the example. These are their differences and the order of when they’ll be processed:

```jsx
STEP 1: 9 - 2 = 7
STEP 2: 9 - 7 = 2
```

First processed is `9-2` , since the difference is `7`, check if there is an element with the key `7` in the map. In this case, not yet, hence we will store `2, 0`pair in the map.

Second processed is `9 - 7`, we will now check for existence of `2` in the map. In this case it `2` exists from our first process, so pull out the assigned index to it and create a resulting array.

# Complexity

- ********************************Time Complexity:******************************** O(n) - worse case, there are no pairs and we iterate over every single item, fetching items from a map is O(1)
- ****************************************Space Complexity:**************************************** O(n) - we are using the map to store the pairs

# Code
## Using JavaScript

```jsx
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
	const map = new Map()

	for (let i = 0; i < nums.length; i++) {
		let diff = target - nums[i]

		if (map.has(diff)) {
			return [i, map.get(diff)]
		}

		map.set(nums[i], i)
	}
}

// Leetcode Runtime: 96 ms
```
## Using TypeScript

```tsx
function twoSum(nums: number[], target: number): number[] {
    const map: Map<number, number> = new Map();

    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i];
        
        if(map.get(diff) !== undefined) {
            return [map.get(diff), i];
        }

        map.set(nums[i], i);
    }

    return [];
};
```

# Alternative Solution

Similar approach, however if we use object instead of map, the runtime is sort of faster
## Using JavaScript
```jsx
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = {}

    for (let i = 0; i < nums.length; i++) {
			let diff = target - nums[i]

			if (diff in map) return [i, map[diff]]

			map[nums[i]] = i
		}
};
```
