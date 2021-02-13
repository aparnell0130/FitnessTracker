const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
    type: {
        type: String,
        // required: true,
        trim: true
    },
    name: {
        type: String,
        // required: true,
        trim: true
    },
    distance: {
        type: Number,
        trim: true
    },
    duration: {
        type: Number,
        // required: true,
        trim: true
    },
    weight: {
        type: Number,
        trim: true
    },
    sets: {
        type: Number,
        trim: true
    },
    reps: {
        type: Number,
        trim: true
    }
});

const Exercise = mongoose.model('Exercise', ExerciseSchema);
module.exports = Exercise