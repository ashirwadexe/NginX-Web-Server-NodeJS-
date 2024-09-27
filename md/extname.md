### **`path.extname()`** (Simple Explanation)

`path.extname()` is a function in Node.js that helps you figure out the **file extension** of a file. 

## What is a file extension?
A **file extension** is the part of the file name that comes after the dot (.), like:
- `.html` for an HTML file
- `.css` for a CSS file
- `.js` for a JavaScript file
- `.png` for an image file

File extensions tell us what type of file it is.

### What does `path.extname()` do?
`path.extname()` extracts and returns the extension of a file from its full path.

### Example:
If you have a file named `"index.html"`, and you want to know what type of file it is, you can use `path.extname()`:

```js
const path = require('path');
const fileName = 'index.html';

const ext = path.extname(fileName); // Returns ".html"
console.log(ext); // Output: ".html"
```

### How it's useful:
- If you're writing a program that deals with files (like a web server), you can use `path.extname()` to check what kind of file the user is requesting. This way, you can serve the right content type (HTML, CSS, JavaScript, etc.).

### Example in your code:
```js
const extName = path.extname(filePath).toLowerCase();
```

- **What it does**: It gets the file extension from `filePath`. For example, if the user requests `"index.html"`, `path.extname(filePath)` will return `".html"`.
- The `.toLowerCase()` ensures that the file extension is in lowercase (because sometimes file extensions might be written in uppercase, like `.HTML`, but we want it to be treated the same way).

In short, `path.extname()` helps your program figure out what kind of file it's dealing with by looking at the file extension.