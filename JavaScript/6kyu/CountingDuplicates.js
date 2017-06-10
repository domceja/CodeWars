// Counting Duplicates

/*
	Count the number of Duplicates

	Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphanumeric characters, including digits, uppercase and lowercase alphabets.
*/ 



// Solution

function duplicateCount(text){
    let countArr = [];
    text = text.toLowerCase();
    countArr = text.split('').filter((val, arr, ind) => {
      if(text.indexOf(val) !== text.lastIndexOf(val)) {
        return val;
      }
    }).filter(onlyUniqueVals);
    
    return countArr.length;
}

function onlyUniqueVals(val, ind, self) {
  return self.indexOf(val) === ind;
}
