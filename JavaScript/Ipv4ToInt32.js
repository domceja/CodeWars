// IPv4 to Int32

// Functional Programming


// Instructions

/*
Take the following IPv4 address: 128.32.10.1 This address has 4 octets where each octet is a single byte (or 8 bits).

1st octet 128 has the binary representation: 10000000
2nd octet 32 has the binary representation: 00100000
3rd octet 10 has the binary representation: 00001010
4th octet 1 has the binary representation: 00000001
So 128.32.10.1 == 10000000.00100000.00001010.00000001

Because the above IP address has 32 bits, we can represent it as the 32 bit number: 2149583361.

Write a function ip_to_int32(ip) ( JS: ipToInt32(ip) ) that takes an IPv4 address and returns a 32 bit number.

*/

function ipToInt32(ip){
  var sum = 0;
  var ipArr = ip.split(".");

  ipArr = ipArr.map(function(ele){
    return parseInt(ele);
  });

  sum = ipArr.reduce(function(acc, ele, index, array) {
  //First Octet 256^3
    if(index == 0){
      acc += (Math.pow(256,3) * ele)
    } else if(index == 1){
      acc += (Math.pow(256,2) * ele)
    } else if(index == 2) {
      acc += (Math.pow(256,1) * ele)
    } else if(index = 3){
    acc +=  ele
    } else {
    
    }
    return acc;
  },0);
  return sum
}



// Best Solution/Clever

function ipToInt32(ip){
   return ip.split(".").reduce(function(int,v){ return int*256 + +v } )
}

