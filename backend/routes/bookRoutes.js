const express = require("express");
const {
  createBook,
  getUserBooks,
  updateBook,
  deleteBook,
} = require("../controllers/bookController");
const authenticate = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/books", authenticate, createBook);
router.get("/books", authenticate, getUserBooks);
router.put("/books/:id", authenticate, updateBook);
router.delete("/books/:id", authenticate, deleteBook);

module.exports = router;

("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3M2JlMzBlZjdmOTdiNTEwZjI1MmRmMCIsImlhdCI6MTczMjA2MDQ0OCwiZXhwIjoxNzMyMDY0MDQ4fQ.U4Uk83yLZ_H4i3pS7P6X2JVNBZGTcne2yRCnSy1E4L4");
