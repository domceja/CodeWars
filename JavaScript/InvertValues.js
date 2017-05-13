//Invert Values 


/*
	Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
*/


function invert(array) {
   return array.map(function(value) {
     if (value > 0) {
       return Math.abs(value) * -1
     } else {
       return Math.abs(value);
     }
   });
}
