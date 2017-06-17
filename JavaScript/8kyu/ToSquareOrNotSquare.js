// To Square(Root) or not to square(Root)


/*
	Write a method, that will get an integer array as parameter and will process every number from this array.
*/

// Solution

function squareOrSquareRoot(array) {
  return array.map((val) => {
    return Number.isInteger(Math.sqrt(val)) ? Math.sqrt(val) : Math.pow(val,2);
  })
}
