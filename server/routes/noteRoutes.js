const express = require("express")

const {
  createNote,
  getNotes,
  deleteNote,
  updateNote
} = require("../controllers/noteController")

const router = express.Router()

// Routes
router.post("/", createNote)
router.get("/", getNotes)
router.put("/:id", updateNote)
router.delete("/:id", deleteNote)

module.exports = router