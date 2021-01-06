const express = require('express');
const PORT = 8080;

// Creating new express App
const app = express();

// Creating a end point with hello world response
app.get("/", (req, res) => {
    res.send("Hello World!!!");
});

// Starting listener on port 8080
app.listen(PORT, () => {
    console.log("Server running on $(PORT)!");
});