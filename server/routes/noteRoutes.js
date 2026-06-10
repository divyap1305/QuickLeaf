const express = require("express")

const {
  createNote,
  getNotes,
  deleteNote,
  updateNote,
  togglePinNote
} = require("../controllers/noteController")

const protect =
  require("../middleware/authMiddleware")

const router = express.Router()

// Routes
router.post("/", protect, createNote)

router.get("/", protect, getNotes)

router.put(
  "/:id",
  protect,
  updateNote
)

router.patch(
  "/:id/pin",
  protect,
  togglePinNote
)

router.delete(
  "/:id",
  protect,
  deleteNote
)

module.exports = router