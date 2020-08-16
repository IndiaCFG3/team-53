const mongoose = require("mongoose");

const schema = mongoose.Schema;

const itemschema = new schema({
  name: {
    type: String,
    required: true,
  },
});

module.exports = Item = mongoose.model("item", itemschema);
