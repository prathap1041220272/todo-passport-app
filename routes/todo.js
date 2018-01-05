'use strict';

const { Todo } = require('../models/');
const express = require('express');
const app = express();
const router = express.Router();





/*
 * All Todo Task Get
 */
router.route('/')

    .get((req, res, next) => {

        Todo.find()
            .then(todo => res.json(todo))
            .catch(next)
    })



    /*
     * Insert New Todo Operation 
     */

    .post((req, res, next) => {
        const { title, work } = req.body || {};
        if (!title || !work) {
            const error = console.error('Bad Request')
            return next(error);
        }

        const todo = new Todo({ title, work })
        todo.save()
            .then(doc => res.json(doc))
            .catch(next)
    });





router.route('/:id')

    /*
     * Completed Todo Operation Delete
     */

    .delete((req, res, next) => {
        const id = req.params.id;
        if (!id) {
            const error = new Error('ID should Not Be Empty');
            return next(error);
        }

        Todo.findByIdAndRemove(id)
            .then(data => res.json(data))
            .catch(next);
    })



    /*
     * Any Changes In todo Operation
     */

    .put((req, res, next) => {
        const id = req.params.id;
        if (!id) {
            const error = console.error('Given Todo Operation Not Be Empty');
            return next(error)
        }
        const data = {
            title: req.body.title,
            status: req.body.work
        }

        Todo.findByIdAndUpdate(id, data, { new: true })
            .then(doc => res.json(doc))
            .catch(next)

    });


/*
 * Handle Errors
 */

router.use((error, req, res, next) => {
    const { message } = error || {};
    const isSuccess = false;
    res.json({ message, isSuccess })
})


module.exports = router;