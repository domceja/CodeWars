// Basic Mathematical Operations

/*
The function should take three arguments - operation(string/char), value1(number), value2(number). The function should return result of numbers after applying the chosen operation.
 */

function basicOp(operation, value1, value2){
    return operators[operation](value1, value2);
}


var operators = {
  '+' : function(a, b) {
    return a + b;
  },
  
  '/' : function(a, b) {
    return a / b;
  },
  
  '*' : function(a, b) {
    return a * b;
  },
  
  '-' : function(a, b) {
    return a -b;
  }
}