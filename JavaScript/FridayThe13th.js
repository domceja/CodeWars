// Friday the 13th Part 1

/*
	It's Friday the 13th, and Jason is ready for his first killing spree!

	Create a function, killcount, that accepts two arguments: an array of array pairs (the conselor's name and intelligence - ["Chad", 2]) and an integer representing Jason's intellegence.

	Your function must return an array of the names of all the counselors who can be outsmarted and killed by Jason.

	Happy Friday the 13th!
*/ 


// Solution

function killcount(counselors, jason){
  return counselors.filter(function(val, ind) {
    if (counselors[ind][1] < jason) {
      return counselors[ind][0];
    }
  }).map(function(val) {
    return val[0];
  });
}
