// Importing the 'http' module to create the HTTP server.
const http = require('http');

// Importing the 'fs' module to interact with the file system.
const fs = require('fs');

// Importing the 'path' module to work with file and directory paths.
const path = require('path');

// Defining the port on which the server will listen.
const port = 3000;

// Creating an HTTP server.
const server = http.createServer((req, res) => {

    // Constructing the file path based on the request URL.
    // If the URL is "/", it serves the "index.html" file; otherwise, it serves the requested file.
    const filePath = path.join(__dirname, req.url === '/' ? "index.html" : req.url);

    // Extracting the file extension from the requested file path.
    const extName = String(path.extname(filePath)).toLowerCase();

    // Defining MIME types for various file extensions.
    const mimeType = {
        '.html': 'text/html',
        '.css': 'text/css',
        '.js': 'text/javascript',
        '.png': 'image/png'  // Correct MIME type for PNG images
    };

    // Determining the content type based on the file extension.
    const contentType = mimeType[extName] || "application/octet-stream";

    // Reading the file from the file system.
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
});

// Starting the server to listen on the specified port.
server.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
