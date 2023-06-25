// IMPORT PACKAGES
import mongoose from "mongoose";
import validator from "validator";

// SCHEMA
const contactMessageSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Name Is Required"],
    },

    email: {
      type: String,
      required: [true, "Email Is Required"],
      validate: [validator.isEmail, "Please Enter Valid Email Address"],
    },

    contact: {
      type: String,
      required: [true, "Contact Number Is Required"],
    },

    service: {
      type: [String],
    },

    message: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("ContactMessage", contactMessageSchema);
