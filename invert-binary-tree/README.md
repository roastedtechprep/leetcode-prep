# Invert Binary Tree
# Problem

Given the `root` of a binary tree, invert the tree, and return *its root*.

**Example 1:**

![https://assets.leetcode.com/uploads/2021/03/14/invert1-tree.jpg](https://assets.leetcode.com/uploads/2021/03/14/invert1-tree.jpg)

```
Input: root = [4,2,7,1,3,6,9]
Output: [4,7,2,9,6,3,1]
```

**Example 2:**

![https://assets.leetcode.com/uploads/2021/03/14/invert2-tree.jpg](https://assets.leetcode.com/uploads/2021/03/14/invert2-tree.jpg)

```
Input: root = [2,1,3]
Output: [2,3,1]
```

**Example 3:**

```
Input: root = []
Output: []
```

# Approach

Since we have to invert the Binary tree, we can solve this using three methods, Recursion, Breadth-First Search and Depth First Search.

## Breadth First Search (BFS)

Is a vertex-based technique for finding the shortest path in the graph. It uses a Queue data structure that follows first in first out (`FIFO`). In BFS, one vertex is selected at a time when it is visited and marked then its adjacent are visited and stored in the queue. It is slower than DFS. 

**Example**:

```
Input:
        A
       / \
      B   C
     /   / \
    D   E   F
```

**Output:**

```
A, B, C, D, E, F
```

## Depth First Search (DFS)

Is an edge-based technique. It uses the Stack data structure and performs two stages, first visited vertices are pushed into the stack, and second if there are no vertices then visited vertices are popped.

**Example**:

```
  Input:
        A
       / \
      B   D
     /   / \
    C   E   F
```

**Output:**

```
A, B, C, D, E, F
```

# JavaScript DFS

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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    const stack = [root];
    while (stack.length) {
        const n = stack.pop();
        if (n != null) {
            [n.left, n.right] = [n.right, n.left];
            stack.push(n.left, n.right);
        }
    }
    return root;
};
```

## Complexity

# JavaScript Recursion

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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if (root == null) return root;
    [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];
    return root;
};
```

## Complexity

# JavaScript Breadth-First Search

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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    const queue = [root];

    while (queue.length) {
        const n = queue.shift();
        if (n != null) {
            [n.left, n.right] = [n.right, n.left];
            queue.push(n.left, n.right);
        }
    }

    return root;
};
```

## Complexity

| Time Complexity | O(m+n); |
| --- | --- |
| Space Complexity | O(n) |
