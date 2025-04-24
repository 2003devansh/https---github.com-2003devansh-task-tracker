const express = require('express');
const {
  createTask,
  getTasksByProject,
  updateTask,
  deleteTask
} = require('../controllers/task.controller');

const router = express.Router();

// Create a task
router.post('/', createTask);

// ✅ Get all tasks for a specific project
router.get('/:projectId', getTasksByProject);

// Update a task by ID
router.put('/:id', updateTask);

// Delete a task by ID
router.delete('/:id', deleteTask);

module.exports = router;
