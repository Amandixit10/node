let x=document.getElementById('area')
let y=document.getElementById('encode')
let z=document.getElementById('eval')
y.onclick=()=>{
    let val=x.value; 
   val=btoa(val);
    document.getElementById('code').value=val;
}