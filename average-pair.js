"use strict"

// add whatever parameters you deem necessary & write docstring

/**
 * averagePair takes a sorted array of numbers and a provided number
 *  It returns true if there exists at least one pair of numbers in the array
 *  whose average is the provided number, and false otherwise
 *
 */
function averagePair(nums, targetAvg) {
  //create indices at either end of nums
  // do next 4 lines until start index > end index
  // check if sum of numbers at those positions equals targetAvg * 2
  // if so, return true
  // if it was greater, move end index down 1
  // if it was less, move start index up 1
  // return false if we've reached the end of the loop

  const targetSum = targetAvg * 2;
  let left = 0;
  let right = nums.length - 1;

  while (left < right){
    if (nums[left] + nums[right] === targetSum){
      return true;
    }
    else if (nums[left] + nums[right] > targetSum){
      right--;
    }
    else {
      left++;
    }
  }
  return false;
}

