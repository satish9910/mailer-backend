const mongoose = require("mongoose");

const emailSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
});

const userEmail = mongoose.model("userEmail", emailSchema);
module.exports = userEmail;
