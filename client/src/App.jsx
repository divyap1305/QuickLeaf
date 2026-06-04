import { useState, useEffect } from "react"

import {
  getNotes,
  createNote,
  deleteNoteById,
  updateNoteById
} from "./services/noteService"

import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import NoteCard from "./components/NoteCard"
import AddNote from "./components/AddNote"
import DeleteModal from "./components/DeleteModal"

function App() {

  // Notes State
  const [notes, setNotes] = useState([])

  // Dark Mode State
  const [darkMode, setDarkMode] = useState(() => {

    const savedTheme = localStorage.getItem("quickleaf-theme")

    return savedTheme === "dark"
  })

  // Input States
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [editingId, setEditingId] = useState(null)
  const [search, setSearch] = useState("")
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [selectedNoteId, setSelectedNoteId] = useState(null)

  // Fetch Notes
  useEffect(() => {

  fetchNotes()
  
  }, [])

  // Save Theme
  useEffect(() => {

    localStorage.setItem(
      "quickleaf-theme",
      darkMode ? "dark" : "light"
    )

  }, [darkMode])

  // Toggle Dark Mode
  function toggleDarkMode() {
    setDarkMode(!darkMode)
  }

  // Handle Inputs
  function handleTitleChange(event) {
    setTitle(event.target.value)
  }

  function handleContentChange(event) {
    setContent(event.target.value)
  }

  function handleSearch(event) {
    setSearch(event.target.value)
  }

  // Add Note
async function addNote() {

  if (
    title.trim() === "" ||
    content.trim() === ""
  ) {
    alert("Please fill all fields")
    return
  }

  try {

    if (editingId) {

      await updateNoteById(
        editingId,
        {
          title,
          content
        }
      )

    } else {

      await createNote({
        title,
        content
      })

    }

    fetchNotes()

    setTitle("")
    setContent("")
    setEditingId(null)

  } catch (error) {

    console.log(error)
  }
}

  // Delete Note
function openDeleteModal(id) {

  setSelectedNoteId(id)
  setShowDeleteModal(true)
}

function closeDeleteModal() {

  setShowDeleteModal(false)
  setSelectedNoteId(null)
}

async function confirmDelete() {

  try {

    await deleteNoteById(selectedNoteId)

    fetchNotes()

    closeDeleteModal()

  } catch (error) {

    console.log(error)
  }
}

  // Filter Notes
  const filteredNotes = notes.filter((note) => {

    return (
      note.title.toLowerCase().includes(search.toLowerCase()) ||
      note.content.toLowerCase().includes(search.toLowerCase())
    )
  })
  async function fetchNotes() {

  try {

    const data = await getNotes()

    setNotes(data)

   } catch (error) {

    console.log(error)
   }
  }

  // Edit Note
  function startEditing(note) {

  setTitle(note.title)

  setContent(note.content)

  setEditingId(note._id)
}

  return (
    <div className={`flex min-h-screen
      ${darkMode ? "bg-gray-950" : "bg-gray-100"}
    `}>

      {/* Sidebar */}
      <Sidebar darkMode={darkMode} />

      {/* Main Section */}
      <div className="flex-1">

        {/* Navbar */}
        <Navbar
          search={search}
          handleSearch={handleSearch}
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />

        {/* Content */}
        <div className="p-8">

          {/* Add Note */}
          <AddNote
            title={title}
            content={content}
            handleTitleChange={handleTitleChange}
            handleContentChange={handleContentChange}
            addNote={addNote}
            darkMode={darkMode}
            editingId={editingId}
          />

          {/* Notes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

            {filteredNotes.length > 0 ? (

              filteredNotes.map((note, index) => (
                <NoteCard
                  key={index}
                  title={note.title}
                  content={note.content}
                  deleteNote={() => openDeleteModal(note._id)}
                  editNote={() => startEditing(note)}
                  darkMode={darkMode}
                />
              ))

            ) : (

              <div className={`col-span-3 text-center text-2xl mt-10
                ${darkMode ? "text-gray-400" : "text-gray-500"}
              `}>
                No Notes Found 🌿
              </div>

            )}
            <DeleteModal
  show={showDeleteModal}
  onCancel={closeDeleteModal}
  onConfirm={confirmDelete}
/>

          </div>

        </div>

      </div>

    </div>
  )
}

export default App