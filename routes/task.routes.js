const express = require("express");

const router = express.Router();

const tasksController = require('../controllers/tasks.controller')

router.get('/add', tasksController.addTaskPage);
router.get('/edit/:id', tasksController.editTaskPage);
router.get('/delete/:id', tasksController.deleteTask);

router.post('/add', tasksController.addTask);
router.post('/edit/:id', tasksController.editTask);

module.exports = router;
