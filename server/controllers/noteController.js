const Note = require("../models/Note")

// Create Note
const createNote = async (req, res) => {

  try {

    const { title, content, pinned, tag } = req.body

    const note = await Note.create({
      title,
      content,
      pinned,
      tag,
      user: req.user.id
    })

    res.status(201).json(note)

  } catch (error) {

    res.status(500).json({
      message: error.message
    })
  }
}

// Get Notes
const getNotes = async (req, res) => {

  try {

    const notes =
  await Note.find({
    user: req.user.id
  })

    res.json(notes)

  } catch (error) {

    res.status(500).json({
      message: error.message
    })
  }
}

// Delete Note
const deleteNote = async (req, res) => {

  try {

    await Note.findByIdAndDelete(req.params.id)

    res.json({
      message: "Note Deleted"
    })

  } catch (error) {

    res.status(500).json({
      message: error.message
    })
  }
}

// Update Note
const updateNote = async (req, res) => {

  try {

    const { title, content, tag } = req.body

    const updatedNote =
      await Note.findByIdAndUpdate(
        req.params.id,
        {
          title,
          content,
          tag
        },
        {
          new: true
        }
      )

    res.json(updatedNote)

  } catch (error) {

    res.status(500).json({
      message: error.message
    })
  }
}

//Pin Note
const togglePinNote = async (req, res) => {

  try {

    const note =
      await Note.findById(req.params.id)

    note.pinned = !note.pinned

    await note.save()

    res.json(note)

  } catch (error) {

    res.status(500).json({
      message: error.message
    })
  }
}

module.exports = {
  createNote,
  getNotes,
  deleteNote,
  updateNote,
  togglePinNote
}