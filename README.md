We used snake_case a lot in Ruby. But now we're living in a JavaScript world where the convention is to use camelCase. Write a function that converts any snake or kebab case string (aka dash/underscore delimited words) and converts it to camel case. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

e.g. 

toCamelCase("foo_bar") // returns "fooBar" 

toCamelCase("Hello-there") // returns "HelloThere"

to CamelCase("") // returns "" 
