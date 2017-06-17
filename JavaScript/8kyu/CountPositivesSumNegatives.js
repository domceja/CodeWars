// Count of Positives/ Sum of Negatives 

/*
	Given an array of integers.

	Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.
*/

// Solution

function countPositivesSumNegatives(input) {
    return input && input.length ? [input.filter(x => x > 0).length, input.filter(v => v < 0).reduce((a,b) => a + b,0)] : [];
}
