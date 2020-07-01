class Solution:
    def findDisappearedNumbers(self, nums: List[int]) -> List[int]:
        unique = set(nums)
        result = []
        for i in range(1, len(nums)+1):
            if(i not in unique):
                result.append(i)

        return result
