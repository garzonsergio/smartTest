var express = require("express");
var router = express.Router();
var path = require("path");

// Explanation: A nameless path GET request without any parameters.
// We'll learn how to name a path in users route.
router.get("/", function (req, res) {
  res.sendFile(path.resolve(__dirname + "/../templates/index.html"));
});

module.exports = router;
