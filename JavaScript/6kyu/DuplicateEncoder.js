// Duplicate Encoder

//String Anaylsis & Manipulation

/*
The goal of this exercise is to convert a string to a new string where each character in the new string is '(' if that character appears only once in the original string, or ')' if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples:
"din" => "((("
"recede" => "()()()"
"Success" => ")())())"
"(( @" => "))(("
*/


function duplicateEncode(word){
    word = word.toLowerCase();
    var str = word.split("");
    for (var i = 0; i <str.length; i++) {
        if (word.split(str[i]).length-1 ==1){
            str[i] = "(";
        } else {
          str[i] = ")";
        }
    }
    return str.join("");
}




function duplicateEncode(word){
  return word
    .toLowerCase()
    .split('')
    .map( function (a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
    })
    .join('');
}