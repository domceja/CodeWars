// Length of Missing Array

/*
	You get an array of arrays.
	If you sort the arrays by their length, you will see, that their length-values are consecutive.
	But one array is missing!
	You have to write a method, that return the length of the missing array.
	If the array of arrays is null/nil or empty, the method should return 0.
	When an array in the array is null or empty, the method should return 0 too!
	There will always be a missing element and its length will be always between the given arrays. 
*/


// Solution

function getLengthOfMissingArray(arrayOfArrays) {
  if(!Array.isArray(arrayOfArrays)) {
    return 0;
  }
  console.log(arrayOfArrays);
  let lengthArr = arrayOfArrays.map((val) => {
    return (!val || val.length === 0) ? 0 : val.length;
  }).sort((a,b) => {return a - b; });
  return checkIfConsecutive(lengthArr);
}

function checkIfConsecutive(arr){
  if(arr[0] == 0) {
    return 0;
  }
  if(arr.length === 0) {
    return 0;
  }
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] !== arr[i+ 1] -1) { 
      return arr[i] + 1;
    }
  }
}
