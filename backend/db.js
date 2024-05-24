const mongoose = require ("mongoose");
const { mongo_url } = require("./config")

mongoose.connect (mongo_url)
const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
});

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}