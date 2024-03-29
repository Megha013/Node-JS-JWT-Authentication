let todos = []; // In-memory database

module.exports = {
    getAllTodos: () => todos,
    getTodoById: (id) => todos.find(todo => todo.id === id),
    createTodo: (todo) => todos.push(todo),
    updateTodo: (id, updatedTodo) => {
        let index = todos.findIndex(todo => todo.id === id);
        if (index !== -1) {
            todos[index] = updatedTodo;
            return true;
        }
        return false;
    },
    deleteTodo: (id) => {
        todos = todos.filter(todo => todo.id !== id);
    }
};
