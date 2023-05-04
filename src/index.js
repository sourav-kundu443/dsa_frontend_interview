function getMaxSumOfSubArray(nums) {
  // let maxSum = nums[0];
  // for (let i = 0; i < nums.length; i++) {
  //   let currentSum = 0;
  //   for (let j = i; j < nums.length; j++) {
  //     currentSum = currentSum + nums[j];
  //     if (currentSum > maxSum) maxSum = currentSum;
  //   }
  // }
  // return maxSum;

  // Kadane's algo
  let currentSum = 0;
  let maxSum = nums[0];
  for (let i = 0; i < nums.length; i++) {
    currentSum += nums[i];
    if (maxSum < currentSum) maxSum = currentSum;
    if (currentSum < 0) currentSum = 0;
  }
  return maxSum;
}

console.log(getMaxSumOfSubArray([-2, -1, 1]));
