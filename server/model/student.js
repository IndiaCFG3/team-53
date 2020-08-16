const mongoose = require("mongoose");

const schema = mongoose.Schema;

const itemschema = new schema({
  name: {
    type: String,
    required: true,
  },
  attendance: {
    type: int,
    default: Date.now,
  },
});

module.exports = Item = mongoose.model("item", itemschema);
