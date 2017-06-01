// Simple Multiplication

/*
	This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
*/


function simpleMultiplication(){
    return arguments[0] % 2 === 0 ? arguments[0] * 8 : arguments[0] * 9
}
