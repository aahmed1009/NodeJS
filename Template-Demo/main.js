const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.send("Hello Worlddddd!ssssssaaaaaaaaaaaaa");
});
app.get("/home", (req, res) => {
  res.render("home");
});
app.get("/random", (req, res) => {
  const num = Math.floor(Math.random() * 10 + 1);
  res.render("random", { num });
});
app.get("/cats", (req, res) => {
  const cats = ["victorya", "msmsh", "momo", "mimi", "lola2"];
  res.render("cats", { cats });
});
app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
