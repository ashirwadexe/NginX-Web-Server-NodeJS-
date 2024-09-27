### Explanation of the Code Block

This code block is using the `fs.readFile` method from the Node.js `fs` (File System) module to read a file from the server's filesystem. It also includes error handling for various scenarios that might occur when trying to read the file. Let’s break it down step by step:

```javascript
fs.readFile(filePath, (err, content) => {
    if (err) {
        // If the file is not found, respond with a 404 status code.
        if (err.code === "ENOENT") {
            res.writeHead(404, { "Content-Type": "text/html" });
            res.end("404: Page Not Found");
        } else {
            // If there is a server error, respond with a 500 status code.
            res.writeHead(500, { "Content-Type": "text/html" });
            res.end(`500: Server Error - ${err.code}`);
        }
    } else {
        // If no error, send the file content with the correct MIME type.
        res.writeHead(200, { "Content-Type": contentType });
        res.end(content, "utf-8");
    }
});
```

### Breakdown of Each Part

1. **`fs.readFile(filePath, (err, content) => { ... });`**
   - This line attempts to read the file specified by `filePath`.
   - The second argument is a callback function that takes two parameters:
     - `err`: This parameter will contain any error that occurs while trying to read the file.
     - `content`: If the file is read successfully, this parameter will contain the file’s content.

2. **Error Handling**:
   - **`if (err) { ... }`**: This checks if there was an error while trying to read the file.
     - **`if (err.code === "ENOENT") { ... }`**: This checks specifically if the error is due to the file not being found (ENOENT stands for "Error NO ENTry").
       - **Responding with a 404**:
         ```javascript
         res.writeHead(404, { "Content-Type": "text/html" });
         res.end("404: Page Not Found");
         ```
         - This sends a response with a **404 Not Found** status code to the client, indicating that the requested resource could not be found. It also sets the `Content-Type` to `text/html` and sends a simple HTML message as the response body.
     - **`else { ... }`**: If the error is not due to the file not being found, it handles it as a server error.
       - **Responding with a 500**:
         ```javascript
         res.writeHead(500, { "Content-Type": "text/html" });
         res.end(`500: Server Error - ${err.code}`);
         ```
         - This sends a response with a **500 Internal Server Error** status code. It sets the `Content-Type` to `text/html` and includes the error code in the response message, which can help with debugging.

3. **Successful File Read**:
   - **`else { ... }`**: If there’s no error (meaning the file was read successfully):
     ```javascript
     res.writeHead(200, { "Content-Type": contentType });
     res.end(content, "utf-8");
     ```
     - This sends a response with a **200 OK** status code, indicating that the request was successful.
     - It sets the `Content-Type` to the appropriate MIME type (determined earlier in the code).
     - Finally, it sends the file's content as the response body, encoded in UTF-8. This allows the browser to properly display or render the file content (like HTML, CSS, or images).

### Summary
- This code block handles the reading of files on the server and responds appropriately to the client based on whether the file is found or if there’s an error.
- It uses standard HTTP status codes to indicate the result of the request:
  - **404** for "Not Found"
  - **500** for "Internal Server Error"
  - **200** for "OK" when the file is successfully read and served.