# Merge Two Sorted List

# Problem

You are given the heads of two sorted linked lists `list1` and `list2`.

Merge the two lists in a one **sorted** list. The list should be made by splicing together the nodes of the first two lists.

Return *the head of the merged linked list*.

**Example 1:**

![https://assets.leetcode.com/uploads/2020/10/03/merge_ex1.jpg](https://assets.leetcode.com/uploads/2020/10/03/merge_ex1.jpg)

```
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
```

# Approach

The first idea that came to my mind is to do a brute force using two while loops, however I’m not a fan of running nested loops. The challenge is to merge the two list in the numerical order. Doing a while loop will increase the Time complexity to `O(n^2)`, this does not look so good. A better approach is using Recursion.

The idea is to move ahead with node in the recursion whose node value is lesser. As an example, if `list1` value is lesser than or equal to `list2` value, we will move ahead with `list1`'s value and make a recursion call with that. Here are the steps below - 

1. We will first check if either `list1` and `list2` is `NULL` or not, in case one node’s value is null, there is no point in merging them together, we can just keep the node that has value.
2. Now we check which value is less from both the current nodes.
3. The one with the less value will call the recursion function by moving ahead with that pointer and simultaneously append that recursion call with the node.

# Complexity

| Time Complexity | O(m + n); m and n are the size of the list1 and list2 |
| --- | --- |
| Space Complexity | O(m + n); function call stack space |

# Solution using JavaScript

```jsx
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    if (!list1 || !list2) {
        return list2 || list1;
    }
    if (list1.val <= list2.val) {
        list1.next = mergeTwoLists(list1.next, list2);
        return list1;
    } else {
        list2.next = mergeTwoLists(list1, list2.next);
        return list2;
    }
};
```

| Runtime | 67 ms | Beats | 88.42% |
| --- | --- | --- | --- |
| Memory | 44.6 MB | Beats | 13.41% |

# Alternative Solution using TypeScript

```tsx
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    if (!list1 || !list2) return list2 || list1;

    if (list1.val <= list2.val) {
        list1.next = mergeTwoLists(list1.next, list2);
        return list1;
    } else {
        list2.next = mergeTwoLists(list1, list2.next);
        return list2;
    }
};
```

| Runtime | 70 ms | Beats | 90.38% |
| --- | --- | --- | --- |
| Memory | 44.7 MB | Beats | 73.42% |

# O(1) Space Complexity with JavaScript

Previous solution did not quite satisfy me. I understand while working with two nodes, the time complexity will be O(m + n). However, this should not necessarily be the case for space complexity. How can we optimize the space complexity? So I did some googling, and find a solution that actually does that. 

The idea is to use a temporary `head` node as the start of the result list. The pointer `tail` always points to the last node in the result list, so appending new nodes is easy, and this should optimize the space complexity to `O(1)`

![https://media.geeksforgeeks.org/wp-content/cdn-uploads/20220303143032/Merge-Two-Sorted-LinkedLists1.jpg](https://media.geeksforgeeks.org/wp-content/cdn-uploads/20220303143032/Merge-Two-Sorted-LinkedLists1.jpg)

Here are the steps - 

- First, we make a new node called `head` that will be our new merged linked list.
- Now make two pointers, one will point to `list1` and other will point to `list2`
- Traverse the lists till one of them gets exhausted
- If the value of the node pointing to either list is smaller than another pointer, add that node to merged linked list and increment that pointer.

# Complexity

| Time Complexity | O(m + n); m and n are the size of the list1 and list2 |
| --- | --- |
| Space Complexity | O(1) |

```jsx
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let head = new ListNode(0)
    let tail = head

    while (true) {
        if (list1 === null || list2 === null) {
            (tail.next = list2) || (tail.next = list1)
            break
        }
        
        if (list1.val <= list2.val) {
            tail.next = list1
            list1 = list1.next
        } else {
            tail.next = list2
            list2 = list2.next
        }

        tail = tail.next
    }

    return head.next
};
```

| Runtime | 74 ms | Beats | 66.66% |
| --- | --- | --- | --- |
| Memory | 44.2 MB | Beats | 47.1% |
