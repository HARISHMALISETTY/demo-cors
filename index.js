const express=require("express");
require("dotenv").config()
const port=process.env.PORT
const cors= require("cors")

const app=express();
app.use(cors());

app.use(cors({origin:"http://127.0.0.1:3200"}))

app.get("/data",(req,res)=>{
    res.send("helloo")

})

app.listen(port,()=>{
    console.log(`server running at ${port}`)
})