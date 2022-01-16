function twoSum(nums, target){
    // your code here
    let resultAry;
        for(let i = 0; i < nums.length; i++){
            for(let j = i + 1; j < nums.length; j++){
                let sum = nums[i] + nums[j];
                if(sum === target){
                    resultAry = [i, j];
                    return resultAry;
                }
            }
        }
        if(!resultAry){
            return "There is no sum of two numbers that meet the target.";
        }
    }
    /*
    For example:
    twoSum([2, 7, 11, 15], 9); Should returns:
    [0, 1] Because:
    nums[0]+nums[1] is 9
    */
    