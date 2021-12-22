const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost:27017/project_todo';
const db = mongoose.connection;

// Connect to MongoDB
mongoose.connect(mongoURI, {
    useNewUrlParser: true, useUnifiedTopology: true
}, () => {
    console.log("DB is Working ...")
});

// Extra Error/Success
db.on("error", (err) => {
    console.log(err.message + " MongoDB NOT running");
});
db.on("connected", (err) => {
    console.log('MongoDB Connected');
});
