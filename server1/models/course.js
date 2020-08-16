const mongoose = require("mongoose");

const schema = mongoose.Schema;

const courseschema = new schema({
  courseid: {
    type: Number,
  },
  coursename: {
    type: String,
  },
});

module.exports = Course = mongoose.model("course", courseschema);
