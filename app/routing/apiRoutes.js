let path = require("path");
let express = require("express");
const router = express.Router();

// Get from friends.js
let friends = require('../data/friends.js');

router.get("https://github.com/JonathanDavis22/Night-Owl-Book-Club")

// Return matches from friends.js as JSON data
router.get("/api/friends", function (req, res) {
    res.json(friends);
});

// Post from friends.js
router.post("/api/friends", function (req, res) {
    console.log(req.body.scores);

    // Receive user data (name, photo, scores)
    let newUser = req.body;

    // parseInt for scores
    for (var i = 0; i < newUser.scores.length; i++) {
        newUser.scores[i] = parseInt(newUser.scores[i]);
    }

    // Default friend match is the first friend
    // Result is whomever has the minimum score differential
    let bookBuddyIndex = 0;
    let minimumDifference = 40;

    // Start with 0-dif, compare the user and the friend scores one at time
    // add to the total difference
    for (var i = 0; i < friends.length; i++) {
        let totalDifference = 0;
        for (var j = 0; j < friends[i].scores.length; j++) {
            let difference = Math.abs(newUser.scores[j] - friends[i].scores[j]);
            totalDifference += difference;
        }

        // If new minimum, change best friend index and set new minimum for next iteration comparison
        if (totalDifference < minimumDifference) {
            bookBuddyIndex = i;
            minimumDifference = totalDifference;
        }
    }

    // After finding a match, add user to friend array
    friends.push(newUser);

    // Send back to browser the bookbuddy match
    res.json(friends[bookBuddyIndex]);
});

module.exports = router;