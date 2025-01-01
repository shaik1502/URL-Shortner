const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({
  original_url: {
    type: String,
    unique: true,
  },
  short_id: {
    type: String,
  },
});

const Url = mongoose.model("Url", urlSchema);
module.exports = Url;
