class Solution:
    def hasCycle(self, head: ListNode) -> bool:
        slow, fast = head, head
        while fast and fast.next:
            if(fast.next == slow):
                return True
            slow = slow.next
            fast = fast.next.next
        return False
