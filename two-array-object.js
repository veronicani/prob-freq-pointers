// add whatever parameters you deem necessary & write docstring
/** Recieves two arrays, of different lengths (keys and values)
 * Return object created from keys and values
 * If there are more keys than values, extra keys should have value of null
*/
function twoArrayObject(keys, vals) {
  const keysToVals = {};
  //loop over keys
  for (let i = 0; i < keys.length; i++) {
    //for each key, if val at the same idx is undefined
    if (vals[i] === undefined) {
      //map 'null' as the value to the key in obj  
      keysToVals[keys[i]] = null;
    } else {
      //add prop of key to object with value of val at same idx
      keysToVals[keys[i]] = vals[i];
    } 

  }

  return keysToVals;
}


