let fs=require('fs');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  if(fs.existsSync('./new_folder'))
{
  readline.question(`write a number`, name => {
    let num=name;
    fs.unlink(`./new_folder/new_text${num}.txt`,()=>{
        console.log("file deleted succefully");
    });
    readline.close()
  })   
}