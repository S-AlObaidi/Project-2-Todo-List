const express = require('express');
const { handle } = require('express/lib/application');
const app = express()
app.use(express.json());
const db = require("./db")
const Todo = require("./models/Todo")

app.get("/all", (req, res) => {
    Todo.find({}, (err, data) => {
        if (err) {
            console.log("ERROR");
        } else {
            res.status(200).json(data);
        }
    })
})

app.post("/add", (req, res) => {
    Todo.create(req.body, (err, newData) => {
        if (err) {
            console.log("ERROR", err);
            res.status(350).json('Todo task Validation Failed')
        } else {
            res.json("Created new Todo Successfully")
        }

    });
})

app.delete("/delete/:id", (req, res) => {
    Todo.deleteOne({ id: req.params.id }, (err, delet) => {
        if (err) {
            console.log("ERROR", err)
        } else {
            if (delet.deletedCount == 0) {
                res.json(req.params.id + " Task Can't be found");
            } else {
                res.json(req.params.id + " Task has been Deleted");
            }

        }
    })
})

app.listen(3000, () => {
    console.log("SERVER ARE WORKING ...")
})