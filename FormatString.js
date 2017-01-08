// Format a string of names like 'Bart, Lisa & Maggie

/*
Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.
*/



function list(names){
  //your code here
  return names.reduce(function(prev, current, index, array){
    if (index === 0){
      return current.name;
    }
    else if (index === array.length - 1){
      return prev + ' & ' + current.name;
    } 
    else {
      return prev + ', ' + current.name;
    }
  }, '');
}