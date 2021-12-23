const express=require("express");
const notes = require("./data/notes");
const dotenv=require("dotenv")
const app=express();

 dotenv.config()
app.get("/",(req,res)=>{
    console.log("Api is running");
    res.send("hello to the API user")
})


app.get("/api/notes",(req,res)=>{
    res.send(notes);
})
const PORT=process.env.PORT||5000
app.listen(PORT,console.log(`Server is listening on port ${PORT}`))
