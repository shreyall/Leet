def threeSum(nums):
    nums.sort()
    result, i = [], 0
    while i < len(nums)-1:
        l, r = i+1, len(nums)-1
        while(l < r):
            temp = nums[l]+nums[r]+nums[i]
            if(temp == 0):
                result.append([nums[l], nums[r], nums[i]])
                l, r = l+1, r-1
                while(l < r and nums[l] == nums[l-1]):
                    l += 1
                while(r > l and nums[r] == nums[r+1]):
                    r -= 1
                while(i < len(nums)-1 and nums[i+1] == nums[i]):
                    i += 1
            elif(temp < 0):
                l += 1
            else:
                r -= 1
        i += 1
    return result


print(threeSum([-1,   0,   1,   2,  -1,  -4]))
#  0   1   2   3   4   5
# -1   0   1   2  -1  -4
# -1  -1   1   0
#  0   0   0   0
