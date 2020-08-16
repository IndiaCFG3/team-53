const mongoose = require("mongoose");

const schema = mongoose.Schema;

const batchschema = new schema({
  batchcode: {
    type: Number,
    required: true,
  },
  batchname: {
    type: String,
  },
  course: {
    type: String,
    ref: "Course",
  },
  center: {
    type: String,
    ref: "Center",
  },
});

module.exports = Batch = mongoose.model("batch", batchschema);
