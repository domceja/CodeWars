// Find The Unique Number

/*
	There is an array with some numbers. All numbers are equal except for one. Try to find it!
*/

// Solution

function findUniq(arr) {
  return arr.filter((val, i, arr) => {
    return arr.indexOf(val) === arr.lastIndexOf(val);
  })[0];
}
