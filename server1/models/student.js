const mongoose = require("mongoose");

const schema = mongoose.Schema;

const studentschema = new schema({
  SID: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  region: {
    type: String,
    required: true,
  },
  batchcode: {
    type: mongoose.Types.ObjectId,
    ref: "Batch",
  },
});

module.exports = Student = mongoose.model("student", studentschema);
