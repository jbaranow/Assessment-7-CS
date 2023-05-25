function addToZero(nums) {
    let complements = new Set();
  
    for (let num of nums) {
      // Check if the complement of the current number is already in the set
      if (complements.has(-num)) {
        return true;
      }
      // Add the current number to the set
      complements.add(num);
    }
  
    return false;
  }

  let numbers = [1,2,3,-2]
  console.log(addToZero(numbers));

// //Tests
// addToZero([]);
// // -> False

// addToZero([1]);
// // -> False

// addToZero([1, 2, 3]);
// // -> False

// addToZero([1, 2, 3, -2]);
// // -> True