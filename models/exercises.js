const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
    day: {
        type: Date,
        default: function(){
            new Date()
        }
    },
    exercises: [{
        type: {
            type: String,
            trim: true,
            required: "Enter the type of workout.",
        },
        name: {
            type: String,
            required: "What is the name of the exercise?",
            trim: true
        },
        distance: {
            type: Number,
            trim: true
        },
        duration: {
            type: Number,
            required: "How long did you do this exercise?",
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
    }]
    
});

const Exercise = mongoose.model('Exercise', ExerciseSchema);
module.exports = Exercise