const Todo = require ('../models/todo')

async function find () {
    return await Todo.find({})
}

async function create(name) {
    return await Todo.create({name : name})
}

async function remove(id) {
    return await Todo.remove({_id : id })
}

module.exports = {
    find,
    create,
    remove
}