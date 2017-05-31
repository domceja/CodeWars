// Sort the Odd

/*
	You have an array of numbers.

	Your task is to sort ascending odd numbers but even numbers must be on their places.

	Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.

*/

//Solution

function sortArray(array) {
  
  var oddNums = array.filter(isOdd).sort(sortAscend);
  
  return array.map(replaceOdd);
  
  function sortAscend(a,b) {
    return a - b;
  }  
  function isOdd(val) {
    return val % 2;
  }
  function replaceOdd(val) {
    return isOdd(val) ? oddNums.shift(): val; 
  };
}
