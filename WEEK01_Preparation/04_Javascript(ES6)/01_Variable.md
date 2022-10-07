# let and const Keywords
## let keyword 
- let have Block Scope.
- let cannot be Redeclared.
- let are also `hoisted` to the top of the block, but` not initialized` --> result in a `ReferenceError`

## const keyword 
- const have Block Scope.
- const cannot be Redeclared.
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