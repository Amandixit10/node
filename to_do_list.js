const express=require('express')
const app=express();
let task=['smaple task'];
app.get('/',(req,res)=>{
let tasklist=task.map(t=><li>${t}</li>).jpin('\n');
res.send(`
    <html>
<body>
<form action="/" method="POST">
    <input name="newtask"> 
    <button type="submit">ADD</button>
</form>
</body>
    </html>
`)
})