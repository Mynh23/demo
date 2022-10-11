
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

# ES6 
# let and const Keywords
## let keyword 
- let have Block Scope.
- let cannot be redeclared.
- let are also `hoisted` to the top of the block, but` not initialized` --> result in a `ReferenceError`

## const keyword 
- const have Block Scope.
- const cannot be redeclared.
- const `cannot be Reassigned`.
- const are also `hoisted` to the top, but `not initialized` --> result in a `ReferenceError`

### Constant Objects and Arrays
You can NOT:
- Reassign a constant value
- Reassign a constant array
- Reassign a constant object

But you CAN:
- Change the elements of constant array
- Change the properties of constant object