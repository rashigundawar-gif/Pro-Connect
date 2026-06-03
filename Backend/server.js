import express from "express";
import { createServer } from "http";

const app=express();
const httpServer= createServer(app);

app.get('/',(req,res)=>{
    res.send("Connected !!");
})

const PORT=5000;
httpServer.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
})