# Express Application

Express is an `npm` package used to write HTTP-based web applications, offering ways for us to write simple request and response handling.

Example:

```JavaScript
/**
 * Writing an Express application
 */

// Set up an express object
const app = require('express')();
const PORT = 8080;

// Listen for requests
app.listen(8080, () => console.log(`Express listening on http://localhost:${PORT}/`));

// Handle a GET request for: 'localhost:8080/'
app.get('/', (req, res) => {
  res.end('<!DOCTYPE html><html><head><title>Hello, World!</title></head><body><h1>Hello, World!</h1></body></html>');
});

// Handle a GET request for: 'localhost:8080/test-params/something'
app.get('/test-params/:myParam'), (req, res) => {
  console.log(req.params); // Value(s) from the URL
  res.end();
});

// Handle a POST request for: 'localhost:8080/submitted'
app.post('/submitted', (req, res) => {
  console.log(req.body); // Values from submitted form fields
  res.end();
});
```