const TaskController = require ('../controllers/planner.controller')
const Task = require ('../models/planner.model')

module.exports = (app) =>{
    app.post('/api/task', TaskController.createTask);
    app.get('/api/task', TaskController.getAllTasks);
    app.get('/api/task/:id', TaskController.getOneTask);
    app.put('/api/task/:id', TaskController.updateTask);
    app.delete('/api/task/:id', TaskController.deleteTask)
}