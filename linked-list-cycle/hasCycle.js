/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if (head == null) return false
    let fast = head

    while(fast != null && fast.next != null) {
        head = head.next
        fast = fast.next.next

        if (head == fast) return true
    }

    return false
};
