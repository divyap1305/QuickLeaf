import { useState } from "react"

import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import NoteCard from "./components/NoteCard"
import AddNote from "./components/AddNote"

function App() {

  // Notes State
  const [notes, setNotes] = useState([
    {
      title: "React Learning",
      content: "Today I learned about React state."
    },
    {
      title: "QuickLeaf Goals",
      content: "Build a beautiful productivity notes app."
    }
  ])

  // Input State
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  // Handle Title Input
  function handleTitleChange(event) {
    setTitle(event.target.value)
  }

  // Handle Content Input
  function handleContentChange(event) {
    setContent(event.target.value)
  }

  // Add New Note
  function addNote() {

    // Prevent empty notes
    if (title.trim() === "" || content.trim() === "") {
      alert("Please fill all fields")
      return
    }

    const newNote = {
      title: title,
      content: content
    }

    setNotes([...notes, newNote])

    // Clear inputs
    setTitle("")
    setContent("")
  }

  return (
    <div className="flex bg-gray-100 min-h-screen">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Section */}
      <div className="flex-1">

        {/* Navbar */}
        <Navbar />

        {/* Content Area */}
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
          <div className="grid grid-cols-3 gap-6">

            {notes.map((note, index) => (
              <NoteCard
                key={index}
                title={note.title}
                content={note.content}
              />
            ))}

          </div>

        </div>

      </div>

    </div>
  )
}

export default App