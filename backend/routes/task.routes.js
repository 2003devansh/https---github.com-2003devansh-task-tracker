const express = require('express');
const {createTask, getTasksByProject, updateTask, deleteTask} = require('../controllers/task.controller');
const router = express.Router() ;

router.post('/',createTask) ;
router.post('/:projectId',getTasksByProject);
router.put('/:id',updateTask);
router.delete('/:id',deleteTask) ;

module.exports = router ; 