 var removeElement = function(nums, val) {
    for(var i = nums.length - 1; i >= 0; i--){
        if(nums[i] === val){
            nums.splice(i, 1);
        }
    }
};

