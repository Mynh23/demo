# Destructuring

The two most used data structures in JavaScript are `Object` and `Array`.

- Objects allow us to create a single entity that stores data items by key.
- Arrays allow us to gather data items into an ordered list.

## Array destructuring

    // an array with the name and surname
    let arr = ["John", "Smith"]

    // destructuring assignment
    // sets firstName = arr[0]
    // and surname = arr[1]

    let [firstName, surname] = arr;

    alert(firstName); // John
    alert(surname); // Smith


## Object destructuring

The basic syntax is:

    let {var1, var2} = {var1:…, var2:…}

**Example**

    let options = {
        title: "Menu",
        width: 100,
        height: 200
    };

    let {title, width, height} = options;

    alert(title);  // Menu
    alert(width);  // 100
    alert(height); // 200

More: [Destructuring Assignment](https://javascript.info/destructuring-assignment#object-destructuring)