const express = require("express");


const app = express();

app.use(express.json());

const start = async () => {
    
    app.listen(2610, () =>{
        console.log("listening to port 2610");
    });
};

// app.get("", (req, res) => {
//     return res.send("Listening to port 2610");
// });


module.exports = start;