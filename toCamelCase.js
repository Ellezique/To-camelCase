//The replace() method searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced.
//The substr() method extracts parts of a string, beginning at the character at the specified position, and returns the specified number of characters.
//Regular expressions are patterns used to match character combinations in strings. In JavaScript, regular expressions are also objects.
//regexr.com  /([A-Z])\w+/g    
    // () groups multiple tokens together and creates a capture group for extracting a substring or using a backreference
    // [] character set. Match any character in the set
    //-,_ is the range. Matches character to the range. 
    // \w matches any word character. Remove the + after w otherwise the entire second word (everything after - or _) will capitalise. 
    // /g global search. Retain the index of the last match, allowing iterative searches


function toCamelCase(str) { 
//code in here upate
    return str.replace(/([_, -]\w)/g, function (str) {
        return str.toUpperCase().substr(1);
    });
}

console.log(toCamelCase("foo_bar")) // returns "fooBar" 
console.log(toCamelCase("Hello-there")) // returns "HelloThere"
console.log(toCamelCase("")) // returns ""

//this is here to run the tests
module.exports = {toCamelCase};
