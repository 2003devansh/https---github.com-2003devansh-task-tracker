const mongoose = require('mongoose');

const taskSchema  = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    status: { type: String, enum: ['todo', 'in-progress', 'done'], default: 'todo' },
    dateCreated: { type: Date, default: Date.now },
    dateCompleted: { type: Date },
    project: { type: mongoose.Schema.Types.ObjectId, ref: 'Project', required: true },
},{ timestamps: true });

module.exports = mongoose.model('Task', taskSchema);