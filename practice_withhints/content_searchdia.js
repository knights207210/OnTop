window.onload = function(){
var e=document.createElement("a");
//a_backtohome.href="https://knights207210.github.io/Firefox-extension-for-medlineplus-tutorial/";
e.innerText="Congras! You find 'diabetes'";
//a_backtohome.innerText.style.border = '5px solid red';
document.body.appendChild(e);
//e.style.border = '5px solid red';
e.style.fontSize = '35px';
e.style.position = "absolute";
e.style.top = '230px';
e.style.left = "500px";
e.style.color = 'red';

document.getElementById("anch_4").style.border = "5px solid red";
var a_backtohome=document.createElement("a");
a_backtohome.innerText="Click this MedlinePlus icon to go back to homepage";
//a_backtohome.innerText.style.border = '5px solid red';
document.body.appendChild(a_backtohome);
a_backtohome.style.border = '5px solid red';
a_backtohome.style.fontSize = '15px';
a_backtohome.style.position = "absolute";
a_backtohome.style.top = '35px';
a_backtohome.style.left = '600px'
};