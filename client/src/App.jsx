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

  // Input States
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  // Search State
  const [search, setSearch] = useState("")

  // Save Notes to Local Storage
  useEffect(() => {

    localStorage.setItem(
      "quickleaf-notes",
      JSON.stringify(notes)
    )

  }, [notes])

  // Handle Title
  function handleTitleChange(event) {
    setTitle(event.target.value)
  }

  // Handle Content
  function handleContentChange(event) {
    setContent(event.target.value)
  }

  // Handle Search
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
      title: title,
      content: content
    }

    setNotes([...notes, newNote])

    // Clear Inputs
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
    <div className="flex bg-gray-100 min-h-screen">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Section */}
      <div className="flex-1">

        {/* Navbar */}
        <Navbar
          search={search}
          handleSearch={handleSearch}
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
                />
              ))

            ) : (

              <div className="col-span-3 text-center text-gray-500 text-2xl mt-10">
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