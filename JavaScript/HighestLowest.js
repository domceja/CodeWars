// Highest and Lowest

/*
	In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

	Notes:

	All numbers are valid Int32, no need to validate them.
	There will always be at least one number in the input string.
	Output string must be two numbers separated by a single space, and highest number is first.
*/

function highAndLow(numbers){
  var newNums = numbers.split(' ');
  
  var newSort = newNums.map(function(value) {
      return parseInt(value);
  }).sort(function(a,b) {
    return a - b;
  }).reverse();
  
  return newSort[0] + ' ' + newSort[newSort.length - 1];
}


// Most Clever

function highAndLow(numbers){
  numbers = numbers.split(' ').map(Number);
  return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
}


