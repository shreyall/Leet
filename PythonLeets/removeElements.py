class Solution:
    def removeElements(self, head: ListNode, val: int) -> ListNode:
        if head == None:
            return head
        while head and head.val == val:
            temp = head.next
            head.next = None
            head = temp
        if head == None:
            return head
        prev = head
        curr = prev.next
        while prev and prev.next:
            if curr and curr.val == val:
                prev.next = curr.next
                curr.next = None
                curr = prev.next
            else:
                curr = curr.next
                prev = prev.next

        return head
