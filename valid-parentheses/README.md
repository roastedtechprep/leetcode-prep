# Problem

Given a string `s` containing just the characters `'('`, `')'`, `'{'`, `'}'`, `'['` and `']'`, determine if the input string is valid.

An input string is valid if:

1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.
3. Every close bracket has a corresponding open bracket of the same type.

**Example:**

```
Input: s = "()"
Output: true
```

# Approach

We have a few steps where we can immediately stop checking validity for the string.

1. When a string has a odd number, it is impossible to find a pair, so return false.
2. If the first item of the string index starts with a closing bracket, we’ll never find a pair for it, so return false.
3. Similarly, if the last item of the string index has an opening bracket, we can return false as we will never find a pair for it as well.

To keep track of the visited brackets and a to clear them when the pair has been found, we could implement a simple stack. I’ll be using an array to act as a stack.

To ease the problem, we’ll define a map of `pairs`, where opening bracket is the key and closing bracket is the value.

# Steps

```jsx
1. IF length of string is odd, return FALSE
2. IF the first item is closing bracket, return FALSE
3. IF the last item is opening bracket, return FALSE
4. Iterate over the string using FOR LOOP
		5. IF the current index is opening bracket, PUSH it on top of the STACK
		6. IF the current index is a closing bracket, 
			check if the top of the STACK is matching with its PAIRS
			7. IF no match is found, it's impossible to close the bracket,
				so RETURN FALSE
8. Finaly, if STACK is EMPTY, RETURN string is valid.
```

# Complexity

| Time Complexity | O(n); worse case, we need to iterate over every item in the string |
| --- | --- |
| Space Complexity | O(n); we are using stack/array |

# Solution using JavaScript

```jsx
/**
 * @param {string} s
 * @return {boolean}
 */

const pairs = {
	"(" : ")",
  "{" : "}",
  "[" : "]"
}

var isValid = function(s) {
	if (s.length % 2 === 1) return false

	if (s[0] === ")" || s[0] === "}" || s[0] === "]") return false

	if (s[s.length - 1] === "(" || s[s.length - 1] === "{" || s[s.length - 1] === "[") return false
	
	let stack = []

	for (let i = 0; i < s.length; i++) {
		if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
			stack.push(s[i])
		} else if (pairs[stack.pop()] !== s[i]) {
			return false
		}
	}

	return stack.length === 0;
}
```

| Runtime | 79ms | Beats | 42.97% |
| --- | --- | --- | --- |
| Memory | 43.6 MB | Beats | 13.93% |

# Alternative Solution using TypeScript

```tsx
function isValid(s: string): boolean {
  const pairs: {[key: string] : string} = {
      "(" : ")",
      "{" : "}",
      "[" : "]"
  };

  if (s.length % 2 === 1) return false;

  if (s[0] === ")" || s[0] === "}" || s[0] === "]") return false

	if (s[s.length - 1] === "(" || s[s.length - 1] === "{" || s[s.length - 1] === "[") return false
	
	let stack: string[] = [];

    for (let i = 0; i < s.length; i++) {
		if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
			stack.push(s[i]);
		} else if (pairs[stack.pop()] !== s[i]) {
			return false;
		}
	}

    return stack.length === 0;
};
```

| Runtime | 78ms | Beats | 53.73% |
| --- | --- | --- | --- |
| Memory | 44.3 MB | Beats | 58.8% |

# Faster Runtime with JavaScript

```jsx
/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function (s) {
  const pairs = {
    '(': ')',
    '{': '}',
    '[': ']',
  };

  const stack = [];

  for (const char of s) {
    if (char in pairs) stack.push(char);
    else {
      const top = stack.pop();
      if (top === undefined || pairs[top] !== char) {
        return false;
      }
    }
  }

  return !stack.length;
};
```

| Runtime | 59ms | Beats | 95.33% |
| --- | --- | --- | --- |
| Memory | 42.4 MB | Beats | 57.43% |
