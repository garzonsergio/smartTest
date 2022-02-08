var express = require("express");
var app = express();
var homeRouter = require("./routes/index");
var customerRouter = require("./routes/customers");

const port = 7000;

app.use("/", homeRouter);
app.use("/customer", customerRouter);

app.listen(port, () => {
  console.log(`Check your port https://localhost:${port}`);
});

module.exports = app;
