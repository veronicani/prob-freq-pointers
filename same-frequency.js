// add whatever parameters you deem necessary & write docstring

/**
 * Takes two positive integers and returns true if both numbers have the same
 *  frequency of digits, false otherwise.
 */
function sameFrequency(int1, int2) {
  //convert to strings
  //build frequency counters for these strings
  //if length of key arrays doesn't match, return false
  //otherwise, check each value for each key in first frequency object and if
  // the corresponding key has the same value in second frequency object for all
  // keys, return true
  const int1ToStr = String(int1);
  const int2ToStr = String(int2);
  const int1Freq = getFrequencyCounter(int1ToStr);
  const int2Freq = getFrequencyCounter(int2ToStr);

  if (int1Freq.size !== int2Freq.size){
    return false;
  }
  for (let key in int1Freq){
    if (int1Freq[key] !== int2Freq[key]){
      return false;
    }
  }
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
