const express = require("express")

const {
  createNote,
  getNotes,
  deleteNote,
  updateNote,
  togglePinNote
} = require("../controllers/noteController")

const router = express.Router()

// Routes
router.post("/", createNote)
router.get("/", getNotes)
router.put("/:id", updateNote)
router.delete("/:id", deleteNote)
router.patch("/:id/pin", togglePinNote)

module.exports = router