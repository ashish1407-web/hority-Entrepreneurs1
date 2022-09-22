const express=require('express')
const app=express();
app.post("/Student",(req,res)=>{
var data=req.query;
res.status(400).send({msg:data})
})
var port=4000;
app.listen(port,()=>{
console.log(`server is start on port ${port}`)    
})







