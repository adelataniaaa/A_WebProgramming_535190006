const mongoose = require ('mongoose');

const todoSchema = new mongoose.Schema({
    name: String
});

const todo = mongoose.model('Todo', todoSchema)

module.exports = todo