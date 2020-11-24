const express = require ('express');
const router = express.Router();

router.get('/',
    async (req,res) => {
        res.render('pages/todo', {tasks: req.session.tasks});
    }
);

router.post('/add',
    async (req,res) => {
        //create session for tasks if not available
        if(!req.session.tasks) {
            req.session.tasks = [];
        }

        //add the new tasks
        const newTask = req.body.taskName ;
        req.session.tasks.push(newTask);

        res.redirect('/todo');
    }
);

router.post('/done/:index', 
    async (req,res) => {
        //delete the tasks
        
    }
)

module.exports = router;