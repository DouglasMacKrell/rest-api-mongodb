const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(process.env.DATABASE_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
const db = mongoose.connection
db.on('error', (error) => console.log(error))
db.once('open', () => console.log('connected to database'))

const PORT = 3000

app.listen(PORT, () => {
   console.log(`Server has started on Port ${PORT}`) 
})