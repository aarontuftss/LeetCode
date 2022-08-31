/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++){
        let other1 = target - nums[i]
        
        if(nums.indexOf(other1) !== -1 && nums.indexOf(other1) !== i){
            return [i,nums.indexOf(other1)]
        }
    }
};