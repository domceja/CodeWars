// Math Issues

/*
	Oh no, our Math object was "accidently" reset. Can you re-implement some of those functions? We can assure, that only non-negative numbers are passed as arguments. So you don't have to consider things like undefined, null, NaN, negative numbers, strings and so on.
*/



// Solution
Math.round = function(number) {
  
  return Number.isInteger(number) ? number  : number % 1  >= 0.5 ? Math.ceil(number) : Math.floor(number);
};

Math.ceil = function(number) {
  if (Number.isInteger(number)){
        return number;
    } else {
      var a = number.toString();
      a = a.split('.');
      a = Number.parseInt(a[0]);
      return a + 1;
    }
};

Math.floor = function(number) {
    if (Number.isInteger(number)){
        return number;
    } else {
      var a = number.toString();
      a = a.split('.');
      }
      return Number.parseInt(a[0]);
};
