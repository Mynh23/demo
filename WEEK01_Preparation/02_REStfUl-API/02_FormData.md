# FormData
The FormData object lets you compile a set of key/value pairs to send using XMLHttpRequest.
## Methods
### FormData.append()
The append() method of the FormData interface appends a new value onto an existing key inside a FormData object, or adds the key if it does not already exist.

**Syntax**

    append(name, value)
    append(name, value, filename)

### FormData.delete()
The delete() method of the FormData interface `deletes a key and its value(s) `from a FormData object.
**Syntax**

    delete(name)

### FormData.entries()
The FormData.entries() method returns an iterator which `iterates through all key/value pairs `contained in the FormData. 

**Syntax**

    entries()
**Return value**
An iterator of FormData's key/value pairs.
**Example**

    formData.append('key1', 'value1');
    formData.append('key2', 'value2');

    // Display the key/value pairs
    for (const pair of formData.entries()) {
    console.log(`${pair[0]}, ${pair[1]}`);
    }
The result is:

    key1, value1
    key2, value2
### FormData.set()
The set() method of the FormData interface `sets a new value` for an existing key inside a FormData object, or adds the key/value if it does not already exist.

**Syntax**

    set(name, value)
    set(name, value, filename)

### FormData.get()
The get() method of the FormData interface `returns the first value associated with a given key` from within a FormData object. 

**Syntax**

    get(name)

**Return value**

A value whose key matches the specified name

### FormData.has()

The has() method of the FormData interface returns whether a FormData object contains a certain key.

**Syntax**

has(name)

**Return value**

true if a key of FormData matches the specified name. Otherwise, false.

### FormData.keys()

**Syntax**

keys()

**Return value**

An iterator of FormData's keys.

### FormData.values()
The FormData.values() method returns an iterator which iterates through all values contained in the FormData.

**Syntax**

    values()

**Return value**

An iterator of FormData's values.