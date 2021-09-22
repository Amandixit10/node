const { urlencoded } = require('express');
const express=require('express')
const app= express();
app.use(express.json());
app.use(urlencoded({extends:true}));
app.use('/',express.static(__dirname+'/public'));
let ar=['subit-here'];
app.post('/eval',(req,res)=>
{
le
})
app.listen(3000,()=>{})