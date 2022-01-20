function hasTargetSum(array, target) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if ((array[i] + array[j]) == target) {
        return true
      }
    }
  }
  return false
}

/* 
  O(nˆ2)
*/

/* 
  Loop through array
  Create two variables i and j
  Add i to j at each element
  compare sum of i and j to target number
  return true if sum of i and j equals target number at any point in iteration
*/

/*
  Create loop with variable i to iterate array
  Create loop with variable j to iterate array one element ahead of variable i
  Add variable i to variable j at every step of iteration
  compare sum to target number
  return true if sum is equal to target number
  return false if otherwise
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
