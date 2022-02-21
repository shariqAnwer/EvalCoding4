const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    firstName: { type: String, required: true },
    
    lastName: { type: String, required: true },
    
    age: { type: Number, required: true },

    email: { type: String, unique: true, required: true },

    profileImages: [{ type: String, required: true }],

    timeStamps: {type: String, required: true}
});

const User = mongoose.model("user", userSchema);

module.exports = User;