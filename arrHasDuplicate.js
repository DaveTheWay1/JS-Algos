// ? Given an integer array nums, return true if any value 
// ? appears more than once in the array, otherwise return false.

class Solution {
  hasDuplicate(nums){
    nums.sort(function(a, b){return a - b});
    for (let i = 0; i < nums.length-1; i++){
      if(nums[i] === nums[i+1]){
        return true
      }
    }
    return false
  }
}
const solution = new Solution();
const nums = [1,1,2,3,4];
console.log(solution.hasDuplicate(nums));