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

//runtime complexity is: O(n) complexity

// //Tests
// addToZero([]);
// // -> False

// addToZero([1]);
// // -> False

// addToZero([1, 2, 3]);
// // -> False

// addToZero([1, 2, 3, -2]);
// // -> True

function hasUniqueChars(word) {
  let charSet = new Set();

  for (let char of word) {
    if (charSet.has(char)) {
      return false;
    }
    charSet.add(char);
  }
  return true;
}

console.log(hasUniqueChars("Moonday"));

//runtime complexity is: O(n) complexity

// //tests
// hasUniqueChars("Monday");
// // -> True

// hasUniqueChars("Moonday");
// // -> False