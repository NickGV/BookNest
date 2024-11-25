const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  subtitle: { type: String },
  description: { type: String, required: true },
  author: { type: String, required: true },
  categories: { type: String, required: true },
  coverImage: { type: String },
  status: {
    type: String,
    enum: ["reading", "completed", "desired", "read", "to-read"],
    required: true,
  },
  pageCount: { type: Number },
  infoLink: { type: String },
  previewLink: { type: String },
  publishedDate: { type: String },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
});

module.exports = mongoose.model("Book", bookSchema);
