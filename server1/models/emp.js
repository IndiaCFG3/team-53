const mongoose = require("mongoose");

const schema = mongoose.Schema;

const empschema = new schema({
  ID: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  manager: {
    type: mongoose.Types.ObjectId,
    ref: 'Emp'
  },
  leaves: {
    type: Number,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
});

module.exports = Emp = mongoose.model("emp", empschema);
