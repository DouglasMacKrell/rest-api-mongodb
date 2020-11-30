const express = require('express')
const router = express.Router()
const Subscriber = require('../models/subscriber')

// Getting ALL
router.get('/', async (req, res) => {
    try {
        const subscribers = await Subscriber.find()
        res.json(subscribers)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
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