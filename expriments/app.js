const express=require('express')


const app=express();
app.set('view engine','ejs');


app.get('/',(req,res)=>{
    const blogs=[
        {title: "This is blog 1", snippet:"This is snippet one"},
        {title: "This is blog two", snippet:"This is snippet two"}
    ];
    res.render('index',{title: 'Home', blogs});  // title is set to home and blogs is passes tot the page
});
app.get('/about',(req,res)=>{
   res.render('about');
   res.end();
});
app.get('/about-us',(req,res)=>{
    res.redirect('/about');
});
app.get('/blogs/create',(req,res)=>{
    res.render('create');
});
app.use((req,res)=>{
    res.status(404).render('404');
});
app.listen(3000);