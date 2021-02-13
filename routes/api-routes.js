const router = require('express').Router()
const db = require('../models')

router.get('/api/workouts/', (req, res) => {
    db.Exercise.create({})
    .then(workout => {
        res.json(workout)
    })
})

module.exports = router