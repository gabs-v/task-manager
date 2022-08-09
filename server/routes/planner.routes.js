const TaskController = require ('../controllers/planner.controller')
const Task = require ('../models/planner.model')

module.exports = (app) =>{
    app.post('/api/tasks', TaskController.createTask);
    app.get('/api/tasks', TaskController.getAllTasks);
    app.get('/api/tasks/:id', TaskController.getOneTask);
    app.put('/api/tasks/:id', TaskController.updateTask);
    app.delete('/api/tasks/:id', TaskController.deleteTask)
}