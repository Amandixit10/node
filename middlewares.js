const express=require('express')
const app=express();



app.use('/xyz', express.static(__dirname+'/public'))

app.listen(3000,()=>{
    console.log('listning the request')
})