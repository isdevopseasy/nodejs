const express = require("express");
const app = express();
const PORT = 8000


// this is the landing route
app.get("/",(req,res)=>{
    res.send("Node api")
})

//  creating a server at port 8000 and this command
app.listen(PORT,()=>{
    console.log(`Listening to port on ${PORT}`)
})