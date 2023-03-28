const express = require("express");
const app = express();

app.get("/r/:subreddit", (req, res) => {
  res.send(`welcome to the ${req.params.subreddit} subreddit`);
});

app.get("/", (req, res) => {
  res.send("this is the homePage !");
});

app.get("/cats", (req, res) => {
  res.send("Hello cats");
});

app.get("/DOGS", (req, res) => {
  res.send("WOOF WOOF WOOF");
});

// app.use((req, res) => {
//   res.send({ color: "red" });
// });
app.get("*", (req, res) => {
  res.send("i don't know that path");
});

app.listen(3000, () => {
  console.log("Example app listening at port 3000");
});
