const { Schema, model } = require("mongoose");

const userSchema = new Schema({
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required'
    },
    password: { type: String, required: true },
    username: { type: String, required: true, unique: true }
});

const User = model("User", userSchema);

module.exports = User;