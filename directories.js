let fs=require('fs');
if(!fs.existsSync('./new_folder'))
{
    fs.mkdir('.new_folder',(err)=>{
        if(err)
        {
            console.log(err);
        }
    })
}
else{
    let num=1;
    while(num<3)
    {
    fs.writeFile(`./new_folder/new_text${num}.txt`,'hello new file',()=>{
        console.log('new file created');
    })
    num++;}
}
