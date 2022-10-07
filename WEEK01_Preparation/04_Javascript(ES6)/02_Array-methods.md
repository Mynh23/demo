# JS Array Methods
## `Array.from()`
The Array.from() method returns an Array object from any object with a length property or any iterable object.

    Create an Array from a String:
    Array.from("ABCDEFG")   // Returns [A,B,C,D,E,F,G]

## `Array keys()`
The keys() method returns an Array Iterator object with the keys of an array.

    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    const keys = fruits.keys();

    let text = "";
    for (let x of keys) {
    text += x;
    }
    // Result: 0 1 2 3  
## `Array find()`
The find() method returns the value of the first array element that passes a test function.

## `Array findIndex()`
The findIndex() method returns the index of the first array element that passes a test function.