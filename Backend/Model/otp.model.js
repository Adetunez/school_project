const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const otpSchema = new Schema(
  {
    code: {
      type: Number,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const OTP = mongoose.model("OTP", otpSchema);
module.exports = OTP;
