const mongoose = require("mongoose");

const helpSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    notes: {
      type: String,
      required: false
    },
    helptype: {
      type: String,
      required: true
    },
    availableBy: {
      type: String,
      required: false
    },
    status: {
      type: String,
      required: false
    },
    progress: {
      type: String,
      required: false
    },
    expires: {
      type: String,
      required: false
    }
  },
  { timestamps: true }
);

const Help = mongoose.model("Help", helpSchema);

module.exports = Help;
