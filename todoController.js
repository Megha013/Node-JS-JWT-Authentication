const express = require('express');
const router = express.Router();
const db = require('./db');

// Get all todos
router.get('/getall', (req, res) => {
    const todos = db.getAllTodos();
    res.json(todos);
});

// Get a todo by ID
router.get('/get/:id', (req, res) => {
    const id = req.params.id;
    const todo = db.getTodoById(id);
    if (todo) {
        res.json(todo);
    } else {
        res.status(404).json({ message: 'Todo not found' });
    }
});

// Create a new todo
router.post('/create', (req, res) => {
    const todo = req.body;
    db.createTodo(todo);
    res.status(201).json({ message: 'Todo created successfully' });
});

// Update a todo
router.put('/update/:id', (req, res) => {
    const id = req.params.id;
    const updatedTodo = req.body;
    const success = db.updateTodo(id, updatedTodo);
    if (success) {
        res.json({ message: 'Todo updated successfully' });
    } else {
        res.status(404).json({ message: 'Todo not found' });
    }
});

// Delete a todo
router.delete('/delete/:id', (req, res) => {
    const id = req.params.id;
    db.deleteTodo(id);
    res.json({ message: 'Todo deleted successfully' });
});

module.exports = router;
