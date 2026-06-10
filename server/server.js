const express = require("express")
const cors = require("cors")
require("dotenv").config()

const connectDB = require("./config/db")
const noteRoutes = require("./routes/noteRoutes")
const authRoutes = require("./routes/authRoutes")

const app = express()

connectDB()

// Middleware
app.use(cors())
app.use(express.json())

// Routes
app.use("/api/auth", authRoutes)
app.use("/api/notes", noteRoutes)

app.get("/", (req, res) => {
  res.send("QuickLeaf Backend Running 🌿")
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})