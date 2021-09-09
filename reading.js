const fs=require('fs');
fs.readFile('./file_system_operations/data.txt',(err,data)=>{
    if(err)
    {
        console.log(err);
    }
    else{
        console.log(data.toString());
    }
})