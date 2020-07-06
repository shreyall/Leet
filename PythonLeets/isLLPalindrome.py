class Solution:
    def isPalindrome(self, head: ListNode) -> bool:
        slow = fast = head
        prev = None

        while fast and fast.next:
            fast = fast.next.next
            temp = slow.next
            slow.next = prev
            prev = slow
            slow = temp
        if fast and not fast.next:
            slow = slow.next

        while slow:
            if(slow.val != prev.val):
                return False
            slow = slow.next
            prev = prev.next
        return True
