'''
class Solution:
    def arrangeCoins(self, n: int) -> int:
        if(n == 0):
            return 0
        counter = 0
        while True:
            counter += 1
            n -= counter
            if(counter+1 > n):
                return counter
'''


class Solution:
    def arrangeCoins(self, n: int) -> int:
        l, h = 1, n
        while(l <= h):
            mid = l + (h-l)//2
            temp = mid*(mid+1)//2
            if(temp == n):
                return mid
            elif (temp > n):
                h = mid-1
            else:
                l = mid + 1
        return h
