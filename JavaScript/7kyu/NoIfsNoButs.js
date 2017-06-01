// No Ifs No Buts

/*
	Write a function that accepts two parameters (a and b) and says whether a is smaller than, bigger than, or equal to b.

	There's only one problem...

	You can't use if statements, and you can't use shorthands like (a < b)?true:false;

	in fact the word "if" and the character "?" are not allowed in the code.

	Inputs are guarenteed to be numbers
*/


// Solution

var noIfsNoButs = function (a,b) {
    switch(true) {
      case a === b:
        return a + " is equal to " + b;
        break;
      case a > b :
        return a + " is greater than " + b;
        break;
      case a < b:
        return a + " is smaller than " + b
        break;
      default: 
        return '';
    }
}
