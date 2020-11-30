const express = require('express')
const router = express.Router()

// Getting ALL
router.get('/', (req, res) => {
    res.send('hello world')
})
// Getting ONE
router.get('/:id', (req, res) => {
    res.send(req.params.id)
})
// Creating ONE
router.post("/", (req, res) => {});
// Updating ONE
router.patch("/:id", (req, res) => {});
// Deleting ONE
router.delete("/:id", (req, res) => {});

module.exports = router