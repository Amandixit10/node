const express=require('express')


const app=express();



app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html')
});
app.get('/about',(req,res)=>{
    res.sendFile(__dirname+'/about.html')
});
app.get('/about-me',(req,res)=>{
    res.redirect('/');
    res.end();
});
app.listen(3000);