const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  author: { type: String, required: true },
  categories: { type: String, required: true },
  coverImage: { type: String },
  status: {
    type: String,
    enum: ["reading", "completed", "desired", "read", "to-read"],
    required: true,
  },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
});

module.exports = mongoose.model("Book", bookSchema);
