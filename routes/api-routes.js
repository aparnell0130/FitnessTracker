const router = require('express').Router()
const db = require('../models')

router.get('/api/workouts/', (req, res) => {
    db.Exercise.find()
    .then(workout => {
        res.json(workout)
    })
    .catch(err => {
        res.json(err)
    })
})

router.post('/api/workouts/', (req, res) => {
    db.Exercise.create({})
    .then(workout => {
        res.json(workout)
    })
    .catch(err => {
        res.json(err)
    })
})

router.put('/api/workouts/:id', (req, res) => {
    const workoutId = req.params.id
    const exercise = req.body
    db.Exercise.findByIdAndUpdate(
        workoutId,
        { $push: {exercises: exercise} }
    )
    .then(workout => {
        res.json(workout)
    })
    .catch(err => {
        res.json(err)
    })
})

module.exports = router