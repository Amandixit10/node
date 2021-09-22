let code=document.getElementById('area')
let encode=document.getElementById('encode')
let eval=document.getElementById('eval')
let encrypt=document.getElementById('encrypt');
encode.onclick=()=>{
    let val=code.value; 
   val=btoa(val);
    document.getElementById('show').value=val;
}
encrypt.onclick=()=>{
    let val=encryptdata(code.value);
    document.getElementById('show').value=val;
}
function encryptdata(data)
{
    return 'XXXXXXXXXXX';
}