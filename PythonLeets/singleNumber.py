class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        unique = {}
        for i in nums:
            if(i in unique):
                unique[i] = unique[i]+1
            else:
                unique[i] = 1

        for k, v in unique.items():
            if(v != 2):
                return k
