const express=require('express')
const app=express();


app.use(express.urlencoded({ extended:true}))   // yeh abhi pata nahi hai
app.set('view engine','hbs');
let task=['sample task'];  // ek array bana li , isme apna input store kar rahe honge

app.get('/',(req,res)=>{   // now if we get a GET request then yeh raha uska event handler
res.render('home',{
    title: "this is a to do list",
    task
})
})
app.post('/',(req,res)=>{
if(task[0]==('sample task'))
{
task.shift();
}
task.push(req.body.newtask)
res.redirect('/')
})

app.listen(3000,()=>{
    console.log('request listed to port 3000')
})