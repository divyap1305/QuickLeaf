import { useState, useEffect } from "react"

import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import NoteCard from "./components/NoteCard"
import AddNote from "./components/AddNote"

function App() {

  // Notes State
  const [notes, setNotes] = useState(() => {

    const savedNotes = localStorage.getItem("quickleaf-notes")

    if (savedNotes) {
      return JSON.parse(savedNotes)
    }

    return []
  })

  // Dark Mode State
  const [darkMode, setDarkMode] = useState(() => {

    const savedTheme = localStorage.getItem("quickleaf-theme")

    return savedTheme === "dark"
  })

  // Input States
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [search, setSearch] = useState("")

  // Save Notes
  useEffect(() => {

    localStorage.setItem(
      "quickleaf-notes",
      JSON.stringify(notes)
    )

  }, [notes])

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
  function addNote() {

    if (title.trim() === "" || content.trim() === "") {
      alert("Please fill all fields")
      return
    }

    const newNote = {
      title,
      content
    }

    setNotes([...notes, newNote])

    setTitle("")
    setContent("")
  }

  // Delete Note
  function deleteNote(indexToDelete) {

    const updatedNotes = notes.filter((note, index) => {
      return index !== indexToDelete
    })

    setNotes(updatedNotes)
  }

  // Filter Notes
  const filteredNotes = notes.filter((note) => {

    return (
      note.title.toLowerCase().includes(search.toLowerCase()) ||
      note.content.toLowerCase().includes(search.toLowerCase())
    )
  })

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
          />

          {/* Notes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

            {filteredNotes.length > 0 ? (

              filteredNotes.map((note, index) => (
                <NoteCard
                  key={index}
                  title={note.title}
                  content={note.content}
                  deleteNote={() => deleteNote(index)}
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

          </div>

        </div>

      </div>

    </div>
  )
}

export default App