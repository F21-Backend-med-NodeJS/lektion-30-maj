const nedb = require('nedb-promise');
const database = new nedb({ filename: 'todos.db', autoload: true });

async function getTodos() {
    return await database.find({}); // Hämta allt i databasen
}

async function addTodo(todo) {
    return await database.insert(todo);
}

async function removeTodo(id) {
    return await database.remove({ id: Number(id) });
}

module.exports = { getTodos, addTodo, removeTodo }