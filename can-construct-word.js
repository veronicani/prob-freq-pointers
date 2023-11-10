"use strict"

// add whatever parameters you deem necessary & write doc comment
/** accepts 2 strings: word and letters
 * return true if word can be built with letters -- false if not
 * inputs will only be lowercase letters
*/
function canConstructWord(word, letters) {
  //count the freq of chars in word and letters
  const wordFreq = getFrequencyCounter(word);
  const lettersFreq = getFrequencyCounter(letters);

  //check each char in the word
  for (const char in wordFreq) {
    //if the val of the char is greater than val of char in letters
    //OR if the char val is NOT in letters
    if (!(char in lettersFreq) || wordFreq[char] > lettersFreq[char]) {
      //return false
      return false;
    }
  }
  //return true
  return true;
}


/** takes an iterable and returns a frequency counter object with each
 *  value in the input as a key and the occurences of that value in the input
 *  as the key's value
*/
function getFrequencyCounter(items) {
  const freqs = {};

  for (const item of items) {
    const curr = freqs[item] || 0;
    freqs[item] = curr + 1;
  }

  return freqs;
}

console.log(getFrequencyCounter("hello"));