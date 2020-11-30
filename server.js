const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

const PORT = 3000;

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("connected to database"));

app.use(express.json())

const subscribersRouter = require('./routes/subscribers')
app.use('/subscribers', subscribersRouter)

app.listen(PORT, () => {
  console.log(`Server has started on Port ${PORT}`);
});
