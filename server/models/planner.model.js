const mongoose = require('mongoose');
const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [
            true,
            "Title is required"
        ]
    },
    details: {
        type: String,
        required: [
            true,
            "Details are required"
        ]
    }
}, {timestamps: true})

const Task = mongoose.model('Task', TaskSchema);

module.exports = Task;