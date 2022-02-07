var express = require("express");
var app = express();
const port = 7000;

var homeRouter = require("./routes/index");
app.use("/", homeRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

module.exports = app;
