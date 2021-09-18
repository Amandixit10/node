const express=require('express')
const app=express();



app.use('/xyz', express.static(__dirname+'/public'))

app.get('/' , (req,res)=>{
    if(req.query.name)
    {
        console.log("this is my name -- "+req.query.name)
    }
    res.send("Hello "+req.query.name)
})
app.listen(3000,()=>{
    console.log('listning the request')
})