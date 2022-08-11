const { model } = require('mongoose')
const Task = require('../models/planner.model.js')


module.exports = {

    createTask: (req, res) => {
        Task.create(req.body)
        .then((newTask) => res.json(newTask))
        .catch((err) => console.log(err))
    },

    getAllTasks: (req, res) => {
        Task.find({})
        .then((allTasks) => {
            console.log(allTasks);
            res.json(allTasks);
        })
        .catch((err) => console.log(err))
    },

    getOneTask: (req,res) => {
        Task.findOne({_id: req.params.id})
        .then((oneTask) =>{
            console.log(oneTask);
            res.json(oneTask);
        })
        .catch((err) => console.log(err))
    },

    updateTask: (req,res) => {
        Task.findOneAndUpdate({_id: req.params.id},
            req.body,
            {new: true, runValidators: true})
            .then((updatedTask) => {
                console.log(updatedTask);
                res.json(updatedTask);
            })
            .catch((err) => console.log(err))
    },

    deleteTask: (req, res) => {
        Task.deleteOne({_id: req.params.id})
        .then((deletedTask) => {
            console.log(deletedTask);
            res.json(deletedTask)
        })
        .catch((err) => console.log(err))
    }

};