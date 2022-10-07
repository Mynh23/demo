
# Declare variable 
Using `var`

    var x = 5;

# Data Types
Data types handle how things are stored. In JavaScript, there are 6 data types:

- String
- Number
- Boolean
- Null
- Undefined
- Object

# Hoisting 
In JavaScript, a variable can be declared after it has been used.

JavaScript only hoists declarations, not initializations.

`Example` 

    x = 5; // Assign 5 to x

    elem = document.getElementById("demo"); // Find an element
    elem.innerHTML = x;                     // Display x in the element

    var x; // Declare x