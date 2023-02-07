# Valid Palindrom

# Problem

A phrase is a **palindrome** if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string `s`, return `true` *if it is a **palindrome**, or* `false` *otherwise*.

**Example 1:**

```
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

```

**Example 2:**

```
Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.

```

**Example 3:**

```
Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.

```

# Approach

# Solution using JavaScript

This solution is the most easiest one, however using built-in methods like `reverse()` and others, probably be invalid in an actual interview. If we solve the problem using built in methods, this just shows we do not really know how these built-in functions works underneath. However, I adding this solution with the build in method below - 

```jsx
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let string = s.toLowerCase().replace(/[^A-Za-z0-9]/g, '')
    return string === string.split('').reverse().join('') ? true : false
};
```

| Runtime | 72 ms | Beats | 85.38% |
| --- | --- | --- | --- |
| Memory | 46.6 MB | Beats | 40.51% |

## Complexity

| Time Complexity | O(n); reverse uses loop |
| --- | --- |
| Space Complexity | O(n); replace usages memory |

# Better one with JavaScript

```jsx
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.toLowerCase().replace(/[^A-Za-z0-9]/g, '')
    for (let i = 0, j = s.length - 1; i <= j; i++, j--) {
        if (s[i] != s[j]) return false
    }
    return true
};
```

| Runtime | 71 ms | Beats | 88.21% |
| --- | --- | --- | --- |
| Memory | 44.3 MB | Beats | 76.51% |

## Complexity

| Time Complexity | O(n); we iterate over every item in the string |
| --- | --- |
| Space Complexity | O(n); replace usages memory |

# Confusion

I am slightly confused with the `replace()` method as whether it would be `O(n)` or `O(1)`, some says this method takes extra memory, some says it doesn't. I’ll add the proper answer to it once I find it.
