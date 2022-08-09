const TaskController = require ('../controllers/planner.controller')
const Task = require ('../models/planner.model')

module.exports = (app) =>{
    app.post('/api/tasks', TaskController.createTask);
    

}