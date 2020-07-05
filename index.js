const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const port = 3000;
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/db", {
  auth: { authSource: "admin" },
  user: "root",
  pass: "admin",
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Db connected.");
});

var bookReviewSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  reviewer: String,
});
var BookReview = mongoose.model("BookReview", bookReviewSchema);

app.get("/bookReviews", async (req, res) => {
  console.log("GET /bookReviews");
  const all = await BookReview.find();
  console.log(all);
  res.send(all);
});

app.post("/bookReviews", (req, res) => {
  console.log("POST /bookReviews", req.body);
  var review = new BookReview(req.body);
  review.save((err, item) => {
    res.send(item);
  });
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);