// Find Unique Number

/*
	Write a function called findUnique which returns the only unique number from an array.

	All numbers in the unsorted array are present twice, except the one you have to find. The numbers are always valid integer values between 1 and 2147483647, so no need for type and error checking. The array contains at least one number and may contain millions of numbers. So make sure your solution is optimized for speed.	
*/


// Solution

function findUnique(numbers) {
  var result = 0;
  for(var i =0; i <numbers.length; i++){
    result ^= numbers[i];
  }
  return result;
}
