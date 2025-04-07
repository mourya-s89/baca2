const express = require("express");
const app = express;

const PORT=8080;

app.get("/ping",(req,res)=>{
    return res.status(200).send("pong");
});

app.put("/",(req,res)=>{
    try {
        return res.status(200).send({message:"email already exists"});
    } catch (error) {
        return res.status(401).send({message:"Email not found"});
    }
});

app.delete("/",(req,res)=>{
    try {
        return res.status(500).send({message:""});
    } catch (error) {
      return res.status(401).send({messsage:""});  
    }
});

app.listen(8080){
    console.log("server running succesfull");
}