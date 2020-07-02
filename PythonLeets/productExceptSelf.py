class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        output = [1]*len(nums)

        count = 1
        for i in range(1, len(nums)):
            output[i] = nums[i-1]*count
            count = count*nums[i-1]

        count = nums[len(nums)-1]
        for i in range(len(nums)-2, -1, -1):
            output[i] = output[i]*count
            count = count*nums[i]
        return output
