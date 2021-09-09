let fs=require('fs');
let readstream=fs.createReadStream('./new_folder/data_3.txt',{encoding:'utf-8'});
let writestream=fs.createWriteStream('./new_folder/new_text2.txt');
/*readstream.on('data',(chunks)=>{   // to hota kya hai ki jab bhot sara data read karna hota hai to we 
    // prefer using streams , data chunks mei bheja jata hai , buffer ki form mei
    console.log(chunks);
    writestream.write('\nnew chunk of data\n');
writestream.write(chunks);
})*/
readstream.pipe(writestream);
