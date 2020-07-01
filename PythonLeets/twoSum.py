class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        unique = {}
        """
        for i in range(len(nums)):
            if(nums[i] not in unique):
                unique[nums[i]] = i
        for i in range(len(nums)):
            look = target-nums[i]
            if(look in unique and unique[look]!=i):
                return[i, unique[look]]
        """
        for i in range(len(nums)):
            if(target-nums[i] in unique):
                return [i, unique[target-nums[i]]]
            else:
                unique[nums[i]] = i
