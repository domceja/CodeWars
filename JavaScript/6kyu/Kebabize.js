// Kebabize

/*
	Modify the kebabize function so that it converts a camel case string into a kebab case.
*/


// Solution

function kebabize(str) {
  str = str.replace(/[A-Z]/g, upperToHyphenLower).replace(/[0-9]/g, '');
  return str.indexOf('-') == 0 ? str.substring(1) : str;
}

function upperToHyphenLower(match, offset, string) {
    return (offset ? '-' : '') + match.toLowerCase();
}
