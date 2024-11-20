const express = require("express");
const {
  createBook,
  getUserBooks,
  updateBook,
  deleteBook,
} = require("../controllers/bookController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", authMiddleware, createBook);
router.get("/", authMiddleware, getUserBooks);
router.put("/:id", authMiddleware, updateBook);
router.delete("/:id", authMiddleware, deleteBook);

module.exports = router;

