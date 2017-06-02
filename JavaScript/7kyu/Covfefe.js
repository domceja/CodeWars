// Covfefe

/*
	Your are given a string. You must replace the word(s) coverage by covfefe, however, if you don't find the word coverage in the string, you must add it at the end of the string with a leading space.
*/


// Solution

function covfefe(str){
  return str.match(/coverage/g) ? str.replace(/coverage/g, 'covfefe') : str + " " + 'covfefe';
}
