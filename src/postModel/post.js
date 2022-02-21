const express = require("express");

const mongoose = require("mongoose");

const multer = require("multer");

const postSchema = new mongoose.Schema({
    
    body: { type: String },
    
    likes: { type: Number, required: true },

    images: [{ type: String }],

    timeStamps: {type: String, required: true}
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;