# Optional chaining '?.'
The optional chaining `?.` stops the evaluation if the value before ?. is undefined or null and returns undefined.

In other words, value?.prop:

- works as value.prop, if value exists
- when value is undefined/null -> it returns undefined.


The optional chaining ?. syntax has three forms:

- `obj?.prop` – returns obj.prop if obj exists, otherwise undefined.

- `obj?.[prop]` – returns obj[prop] if obj exists, otherwise undefined.

- `obj.method?.()` – calls obj.method() if obj.method exists, otherwise returns undefined.

