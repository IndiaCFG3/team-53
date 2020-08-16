const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const router = express.Router();
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const db = require("./config/keys").mongoURI;
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("connected database"))
  .catch((err) => console.log(err));

app.listen(5000, () => {
  console.log("Started on PORT 5000");
});
const path = require("path");
const api = require("./routes/api/items");
app.use(bodyParser.json());

app.use("/api", api);
// router.get("/", (req, res) => {
//   res.sendfile("index.html");
// });

// router.post("/login", (req, res) => {
//   var user_name = req.body.user;
//   var password = req.body.password;
//   console.log("User name = " + user_name + ", password is " + password);
//   res.end("yes");
// });

// router.post("/process_post", function (req, res) {
//   // Prepare output in JSON format
//   response = {
//     first_name: req.body.user,
//     last_name: req.body.password,
//   };
//   console.log(response);
//   res.end(JSON.stringify(response));
// });
