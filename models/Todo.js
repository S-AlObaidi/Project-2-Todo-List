const { Schema, model } = require("mongoose");

const todoSchema = new Schema({
    isCompleted: { type: Boolean, required: true },
    title: { type: String, required: true }
});

const Todo = model("Todo", todoSchema);

module.exports = Todo;