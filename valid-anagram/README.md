# Valid Anagram

# Problem

Given two strings `s` and `t`, return `true` *if* `t` *is an anagram of* `s`*, and* `false` *otherwise*.

An **Anagram** is a word or phrase formed by rearranging
 the letters of a different word or phrase, typically using all the 
original letters exactly once.

**Example 1:**

```
Input: s = "anagram", t = "nagaram"
Output: true

```

**Example 2:**

```
Input: s = "rat", t = "car"
Output: false

```

**Follow up:**
What if the inputs contain Unicode characters? How would you adapt your solution to such a case?

# Approach

First Check - If the length of `s` and `t` is same, if not, not Anagram.

We need create a Hash-table, to store the characters of `s` and how many time they appeared.

Iterate through `s` and store the characters in the `Hash`, if the character appeared once, we will store `1` value against it, if it appeared multiple times, we will increase the value.

Iterate through `t` and check if `t[i]` exists in the `Hash` object of `s`

If does not exists, loop will break.

Else, 

if word matches, and have a value greater than one, we will decrease the value by 1 and continue

# JavaScript

```jsx
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;

    let hash = {};

    for (let i = 0; i < s.length; i++) {
        hash[s[i]] = hash[s[i]] + 1 || 1;
    }

    for (let i = 0; i < t.length; i++) {
        if (!hash[t[i]]) {
            return false;
        } else {
            hash[t[i]]--;
        }
    }

    return true; 
};
```

| Runtime | 80 ms | Beats | 85.13% |
| --- | --- | --- | --- |
| Memory | 43.1 MB | Beats | 78.16% |

## Complexity

| Time Complexity | O(n); worse case we have to iterate over every item |
| --- | --- |
| Space Complexity | O(n); hash table use memory |
