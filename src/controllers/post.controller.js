const express = require("express");

const router = express.Router();

const Post = require("../postModel/post");

router.post(
    "/", 
    body("likes").isLength({min: 0}),
    body("profileImages"),
    body("timeStamps"),

    async (req, res) => {

        const user = await User.create(req.body);
        res.status(201).json({ data: user });
    }
    );

    module.exports = router;

