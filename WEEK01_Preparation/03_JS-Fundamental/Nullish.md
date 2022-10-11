# Nullish coalescing operator

The nullish coalescing operator is written as two question marks `??`

Returns `the first argument if it’s not null/undefined`. Otherwise, the second one.

**Example 1**

    let user;
    alert(user ?? "Anonymous"); // Anonymous (user not defined)

**Example 2**

    let firstName = null;
    let lastName = null;
    let nickName = "Supercoder";

    // shows the first defined value:
    alert(firstName ?? lastName ?? nickName ?? "Anonymous"); // Supercoder

## Comparison with ||

The important difference between them is that:

- || returns the `first truthy value`.
- ?? returns the `first defined value`.

**Example 1**

    let height = 0;

    alert(height || 100); // 100
    alert(height ?? 100); // 0