const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: { 
        type: String,
        required: true 
    },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    city: { type: String, required: true },
    country: { type: String, required: true },
    summary: { type: String, required: true },
    frameworks: [{
        name: { type: String, required: true },
        level: { type: String, required: true },
        year: { type: String, required: true },
    }],
    hobbies: [{
        name: { type: String, required: true },
        description: { type: String, required: true },
    }],
});

module.exports = mongoose.model("User", userSchema);