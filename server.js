// Requirements
const express = require("express");
const path = require("path");

// Setup App
let app = express();
let PORT = process.env.PORT || 666;

// Import routes below
// require(path.join(__dirname, 'app/routing/htmlRoutes.js'));
// require(path.join(__dirname, 'app/routing/apiRoutes.js'));

let apiRoutes = require('./app/routing/apiRoutes.js');
let htmlRoutes = require('./app/routing/htmlRoutes.js');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', htmlRoutes);
app.use('/', apiRoutes);

// Set server listening
app.listen(PORT, function(){
    console.log("Server is listening on PORT: " + PORT);
});