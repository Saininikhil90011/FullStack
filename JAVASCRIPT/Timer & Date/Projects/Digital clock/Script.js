let hour=document.getElementById("hour");
let munite=document.getElementById("munite");
let second=document.getElementById("second");

function clock(){
    let now = new Date();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();
    hour.innerHTML=h;
    munite.innerHTML=m;
    second.innerHTML=s;
}  
setInterval(clock,1000);
