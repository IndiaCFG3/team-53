const express = require("express");

const router = express.Router();

//const Item = require("../../models/items");
const Batch = require("../../models/batch");
const Center = require("../../models/center");
const Course = require("../../models/course");
const Emp = require("../../models/emp");
const Student = require("../../models/student");

router.get("/employeehr", (req, res) => {
  Emp.find()
    .sort({ date: -1 })
    .then((items) => res.json(items));
});

router.get("/employee", (req, res) => {
  const newit = new Emp({
    ID: 1,
    name: "girl",
    rating: 2,
    leaves: 4,
    role: "mentor",
  });
  newit.save().then((item) => res.json(item));
});

router.get("/student", (req, res) => {
  const newit = new Student({
    dob: new Date(),
    SID: 1,
    name: "girl",
    region: "mumbai",
  });
  newit.save().then((item) => res.json(item));
});

// router.delete("/:id", (req, res) => {
//   Item.findById(req.params.id)
//     .then((item) => item.remove().then(() => res.json({ success: true })))
//     .catch((err) => res.status(404).json({ success: false }));
// });

module.exports = router;
