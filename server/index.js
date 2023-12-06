const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const routes = require('./Callbacks/index')
require('dotenv').config()

//Database connection
;(async () => {
  console.log('🟠 connecting to the database...')
  await mongoose.connect(
    'mongodb+srv://alikhantareen:Pakistan786@cluster0.po7h8av.mongodb.net/property_finder'
  )
  console.log('🟢 MongoDB successfully connected.')
})()

//required CORS and BODYPARSER
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/getAllTracks', routes.getAllTracks);
app.get("/single_track/:id", routes.getSingleTrack)

// Server connection
app.listen(process.env.PORT, () => {
  console.log(`🟢 Server is running...`)
})
