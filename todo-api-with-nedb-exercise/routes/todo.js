const { Router } = require('express');
const router = Router();

const { getTodos, addTodo, removeTodo } = require('../database/db');

router.get('/', async (request, response) => {
    console.log('I get todos');
    const todos = await getTodos();
    const resObj = {
        todos: todos
    }

    response.json(resObj);
});

router.post('/', async (request, response) => {
    const todo = request.body;
    if(todo.hasOwnProperty('todo') && todo.hasOwnProperty('id')
        && todo.hasOwnProperty('done')) {
        console.log(todo);
        const todos = await addTodo(todo);

        const resObj = {
            success: true,
            todos: todos
        }

        response.json(resObj);
    } else {
        const resObj = {
            success: false,
            message: 'Invalid body'
        }

        response.status(400).json(resObj);
    }
});

router.delete('/:id', async (request, response) => {
    const id = request.params.id;
    console.log('ID:', typeof id);

    const todos = await removeTodo(id);

    const resObj = {
        success: true,
        todos: todos
    }

    response.json(resObj);
});

module.exports = router;