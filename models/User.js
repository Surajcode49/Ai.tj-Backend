import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: String,
  Photo: String,
  googleId: {
    type: String,
    required: true,
    unique: true,
  },
  role: {
    type: "String",
    enum: ["admin", "user"],
    default: "user",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const User = mongoose.model("NAME", schema);
