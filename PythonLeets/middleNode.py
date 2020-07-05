class Solution:
    def middleNode(self, head: ListNode) -> ListNode:
        slow = fast = head

        while fast:
            if fast.next == None:
                return slow
            if fast.next.next == None:
                return slow.next
            slow = slow.next
            fast = fast.next.next
