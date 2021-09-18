const express=require('express');
const app=express();
 
function m1(req,res,next) {
console.log('m1-pre');
next();
console.log('m1-post');
}

function m2(req,res,next) {
    console.log('m2-pre');
    next();
    console.log('m2-post');
    }
    function m3(req,res,next) {
        console.log('m3-pre');
        next();
        console.log('m3-post');
        }
app.get('/', m3,m2,m1,(erq,res)=>{
    console.log('send response')
})
app.listen(3000,()=>{})   // event listner