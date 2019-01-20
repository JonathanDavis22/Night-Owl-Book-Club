// Set routes
const path = require("path");
const express = require("express");
const router = express.Router();

// module.exports = function(app) {
// app.get("/", function(req, res) {
//     res.sendFile(path.join(__dirname, "../public/home.html"));
// });

// app.get("/survey", function(req, res) {
//     res.sendFile(path.join(__dirname, "../public/survey.html"));
// });
// };

router.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
});

router.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
});

module.exports = router;