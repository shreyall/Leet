class Solution:
    def reverseList(self, head: ListNode) -> ListNode:
        curr = head
        prev = None

        while curr:
            temp = curr.next
            curr.next = prev
            prev = curr
            curr = temp
        return prev
