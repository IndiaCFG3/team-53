const mongoose = require("mongoose");

const schema = mongoose.Schema;

const centerschema = new schema({
  CID: {
    type: Number,
    required: true,
  },
  center_name: {
    type: String,
    required: true,
  },
  center_manager: {
    type: mongoose.Types.ObjectId,
    ref: 'Emp'
  },
center_location:{
  type:String,
  required:true,
}
});

module.exports = Center = mongoose.model("center", centerschema);
