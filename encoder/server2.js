const express=require('express')
const app= express();

app.use('/', express.static(__dirname+'/public'))

function calculate(req,res,next){
    for(q in req.query)
    {
        let data=req.query[q]
        data=new Buffer(data,'base64').toString('ascii')
        req.query[q]=data
    }
    next();
}
app.get('/eval',calculate,(req,res)=>{
    console.log(req.query)
    res.send('wollhaa')
})

app.listen('3000',()=>{})