// Camel Case Method 

/*
	Write simple .camelcase method (camel_case function in PHP) for strings. All words must have their first letter capitalized without spaces.
*/

// Solution

String.prototype.camelCase=function(){
    var a = this.split(' ');
    return a.map(function(val){
      return val.replace(/^[a-z]/, camelCaseFirstLetter);
    }).join('');
}

function camelCaseFirstLetter(a){
  return a.toUpperCase();
}
