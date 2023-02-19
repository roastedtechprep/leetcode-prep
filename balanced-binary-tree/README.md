# Balanced Binary Tree

# Problem

Given a binary tree, determine if it is **height-balanced.**

A **height-balanced** binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one

**Example 1:**

![https://assets.leetcode.com/uploads/2020/10/06/balance_1.jpg](https://assets.leetcode.com/uploads/2020/10/06/balance_1.jpg)

```
Input: root = [3,9,20,null,null,15,7]
Output: true

```

**Example 2:**

![https://assets.leetcode.com/uploads/2020/10/06/balance_2.jpg](https://assets.leetcode.com/uploads/2020/10/06/balance_2.jpg)

```
Input: root = [1,2,2,3,3,null,null,4,4]
Output: false

```

**Example 3:**

```
Input: root = []
Output: true

```

# Approach

# JavaScript

```jsx
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    function dfs(node) {
        if (node == null) return [true, 0];
        let left = dfs(node.left);
        let right = dfs(node.right);

        let balanced = left[0] && right[0] && Math.abs(left[1] - right[1]) <= 1;

        return [balanced, 1 + Math.max(left[1], right[1])];
    }

    return dfs(root)[0];
};
```

| Runtime | 65 ms | Beats | 96.64% |
| --- | --- | --- | --- |
| Memory | 48.6 MB | Beats | 12.1% |

## Complexity

| Time Complexity | O(n); Worst case we are visiting all the sub nodes one time |
| --- | --- |
| Space Complexity | O(h); H is height of the tree  |
