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
    Todo.deleteOne({ _id: req.params.id }, (err, delet) => {
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

app.put("/edit/task/:id", (req, res) => {
    Todo.updateOne({ _id: req.params.id }, { title: req.body.newTitle }, (err, upObj) => {
        if (err) {
            console.log("ERROR", err);
            res.status(350).json('Task title Validation Failed');
        } else {
            upObj.modifiedCount === 1
                ? res.json("Task title has been Edited to " + req.body.newTitle)
                : res.status(404).json("Task title hasn't been found")
                ;
        }
    })
})

// ---------------------------------------------------------------------------------
// We can replace these two GETs with One (GET filter)
app.get("/completed", (req, res) => {
    Todo.find({ isCompleted: true }, (err, data) => {
        if (err) {
            console.log("ERROR");
        } else {
            res.status(200).json(data);
        }
    })
})

app.get("/not_completed", (req, res) => {
    Todo.find({ isCompleted: false }, (err, data) => {
        if (err) {
            console.log("ERROR");
        } else {
            res.status(200).json(data);
        }
    })
})
// ------------------------------------------------------------------------------------

//     (GET filter)
//              ?key=value&key=value
app.get("/filter", (req, res) => {
    Todo.find({ isCompleted: req.query.isCompleted }, (err, data) => {
        if (err) {
            console.log("ERROR");
        } else {
            res.status(200).json(data);
        }
    })
})

app.delete("/delCompleted", (req, res) => {
    Todo.deleteMany({ isCompleted: true }, (err, del) => {
        if (err) {
            console.log("ERROR")
        } else {
            del.deletedCount === 0
                ? res.status(200).json("Can't find Any COMPLETED Tasks")
                : res.json("Delete All COMPLETED Task Successfully")
            // console.log(del)
        }
    })
})

app.put("/editTask/:id/:isCompleted", (req, res) => {
    Todo.updateOne({ _id: req.params.id }, { isCompleted: req.params.isCompleted }, (err, edit) => {
        if (err) {
            console.log("ERROR", err);
            res.status(350).json('Task ID Validation Failed');
        } else {
            edit.modifiedCount === 1
                ? res.json("Task STATE has been Changed to " + req.params.isCompleted)
                : res.status(404).json("Task is allready " + req.params.isCompleted)
                ;
        }
    })
})

app.listen(3000, () => {
    console.log("SERVER ARE WORKING ...")
})