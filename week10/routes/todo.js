const express = require ('express');
const router = express.Router();

const TodoController = require('../controllers/todo');

router.get('/',
    async (req,res) => {
        if(!req.session.user) {
            res.redirect('/auth/login');
        } else {
            res.render('pages/todo', {
                tasks: await TodoController.find()
            });
        }
    }
);

router.post('/add',
    async (req,res) => {
        /*//create session for tasks if not exist
        if(!req.session.tasks) {
            req.session.tasks = [];
        }*/

        //add the new tasks
        const newTask = req.body.taskName ;
        await TodoController.create(newTask)

        res.redirect('/todo');
    }
);

router.post('/done/:index', 
    async (req,res) => {
        //get the index of the task to be deleted
        const index = req.params.index

        //only delete if there's that task
        /*if (req.session.tasks && index < req.session.tasks.length) {
            req.session.tasks.splice(index, 1);
        }*/

        //delete task
        await TodoController.remove(index)

        res.redirect('/todo');
    }
);

module.exports = router;