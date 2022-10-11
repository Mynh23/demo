# JS Array Methods
## `Array.isArray()`
The `isArray()` method checks whether an object is an array.

    Array.isArray(fruits); // Return true/ false
## `Array forEach()`
The `forEach()` method calls a function once for each array element.

    const arr = [
    { id: 1, name: "Hải" },
    { id: 2, name: "Doanh" },
    { id: 3, name: "Việt" },
    ]
    arr.forEach(element => console.log(element.name))
    //-------> Result : Hải
    //                  Doanh
    //                  Việt
## `Array map()`
The map() method `creates a new array` by performing a function on each array element.

The map() method does not execute the function for array elements without values.

The map() method `does not change `the original array.

    const arr = [5, 4, 3, 2, 1]
    arr.map(x => x * x)
    //-------> Result : 25
    //                   16
    //                   9
    //                   4
    //                   1

## `Array filter()`
The filter() method `creates a new array` with array elements that pass a test.

    const arr = [
    { id: 1, name: "Hải" },
    { id: 2, name: "Doanh" },
    { id: 3, name: "Việt" },
    { id: 4, name: "Doanh" },
    ]

    arr.filter(element => element.name === "Doanh")
    //-------> Result : 0:{id: 2, name: "Doanh"},
    //                   1:{id: 4, name: "Doanh"}

##  `Array reduce()`
The reduce() method runs a function on each array element to produce (reduce it to) a single value.

The reduce() method works from left-to-right in the array. 

    const array1 = [1, 2, 3, 4];
    // 0 + 1 + 2 + 3 + 4
    const initialValue = 0;
    const sumWithInitial = array1.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
    );

    console.log(sumWithInitial);
    // expected output: 10

##  `Array every()`
The `every()` method checks if all array values pass a test.

    const numbers = [45, 4, 9, 16, 25];
    let allOver18 = numbers.every(myFunction);

    function myFunction(value, index, array) {
    return value > 18;
    }
    // Result: false

##  `Array some()`
The `some()` method checks if some array values pass a test.

    const numbers = [45, 4, 9, 16, 25];
    let someOver18 = numbers.some(myFunction);

    function myFunction(value, index, array) {
    return value > 18;
    }
    // Result: true

##  `Array indexOf()`
The indexOf() method searches an array for an element value and returns its position.

**Syntax**

    array.indexOf(item, start)

**item**: Required. The item to search for.

**start**: Optional. Where to start the search. Negative values will start at the given position counting from the end, and search to the end.

# ES6
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