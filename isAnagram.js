// Given two strings s and t, return true if the two strings are 
// anagrams of each other, otherwise return false.

// An anagram is a string that contains the exact same characters 
// as another string, but the order of the characters can be different.


// Example 1:
// Input: s = "racecar", t = "carrace"
// Output: true
// Example 2:
// Input: s = "jar", t = "jam"
// Output: false
// Constraints:
// s and t consist of lowercase English letters.

class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {boolean}
   */
  isAnagram(s, t) {
    const sString = s.toLowerCase();
    const tString = t.toLowerCase();
    const sortedSString = sString.split('').sort().join('');
    const sortedTString = tString.split('').sort().join('');
    if(sortedSString.length === sortedTString.length){
      for(let i = 0; i < sortedSString.length; i++){
        console.log(sortedSString[i], sortedTString[i])
        if(sortedSString[i] === sortedTString[i]){
          continue
        }else {
          console.log(`${sortedSString[i]} does not equal ${sortedTString[i]}`);
          console.log(sortedSString, sortedTString);
          return false
        }
      }
      return true
    } else {
      console.log('length is not equal')
      return false
    }
  }
}
const solution = new Solution();
const result = solution.isAnagram("jar", "jam");
console.log(result);