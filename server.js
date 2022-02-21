const express = require("express");


const app = express();

const connect = require("./src/config/db")

app.use(express.json());

const start = async () => {
    
    // await connect();

    app.listen(2610, () =>{
        try{
        console.log("listening to port 2610");
        }catch(e){
            console.log("error");
        }
    });
};

// app.get("", (req, res) => {
//     return res.send("Listening to port 2610");
// });


module.exports = start;