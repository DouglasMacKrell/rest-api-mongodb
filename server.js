const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/subscribers')
const PORT = 3000

app.listen(PORT, () => {
   console.log(`Server has started on Port ${PORT}`) 
})