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

//runtime complexity is: O(n)

//tests
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

//runtime complexity is: O(n)

//tests
// hasUniqueChars("Monday");
// // -> True

// hasUniqueChars("Moonday");
// // -> False

function isPangram(sentence) {
  sentence = sentence.toLowerCase();

  let letterSet = new Set();

  for (let i = 0; i < sentence.length; i++) {
    let char = sentence[i];
    if (char >= 'a' && char <= 'z') {
      letterSet.add(char);
    }
  }
  return letterSet.size === 26;
}

console.log(isPangram("I like cats, but not mice"))

//runtime complexity is: O(n)

//tests
// isPangram("The quick brown fox jumps over the lazy dog!");
// // -> True

// isPangram("I like cats, but not mice");
// // -> False

function find_longest_word(words) {
  let longest_length = 0;

  for(let word of words) {
    if (word.length > longest_length) {
      longest_length = word.length;
    }
  }
  return longest_length;
}

let words = ["hi", "hello"]
console.log(find_longest_word(words))

//runtime complexity is: O(n)

//test
//findLongestWord(["hi", "hello"]);
// -> 5