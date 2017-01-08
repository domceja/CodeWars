// IQ Test 

/*
Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.
*/


function iqTest(numbers){
  var numArr = numbers.split(" ").map(function(ele) {return parseInt(ele)});
  
  var odd = numArr.filter(function(ele){return ele % 2 == 1});
  var even = numArr.filter(function(ele){return ele % 2 == 0});
  
   return odd.length < even.length ? (numArr.indexOf(odd[0]) + 1) : (numArr.indexOf(even[0]) + 1);
  
}