const express = require("express");

const router = express.Router();

const User = require("../models/userModel");

router.post(
    "/", 
    body("firstName").isLength({ min: 3, max: 30 }),
    body("lastName").isLength({ min: 3, max: 30 }),
    body("age").isLength({ min: 1, max: 150 }),
    body("email").isEmail(),
    body("profileImages"),
    body("timeStamps"),

    async (req, res) => {

        const user = await User.create(req.body);
        res.status(201).json({ data: user });
    }
    );

    module.exports = router;

