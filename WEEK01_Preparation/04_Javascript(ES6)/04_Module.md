# Module 

JavaScript modules allow you to break up your code into separate files.
JavaScript modules rely on the `import` and `export` statements.

## `Export`

can export a function or variable from any file.
There are two types of exports: Named and Default.

### `Named Exports`
**In-line individually**

    export const name = "Jesse";
    export const age = 40;

**All at once at the bottom**

    const name = "Jesse";
    const age = 40;
    export {name, age};
    
### `Default Exports`
`Only one` default export in a file

    export default myFunction;
## `Import`
###  Import from named exports

    import { name, age } from "./person.js";

###  Import from default exports

    import message from "./message.js";