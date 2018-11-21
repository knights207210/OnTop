window.onload = function(){
var e=document.createElement("a");
//a_backtohome.href="https://knights207210.github.io/Firefox-extension-for-medlineplus-tutorial/";
e.innerText="Congras! You find 'Ginkgo'";
//a_backtohome.innerText.style.border = '5px solid red';
document.body.appendChild(e);
e.style.border = '5px solid red';
e.style.fontSize = '20px';
e.style.position = "absolute";
e.style.left = '500px'
e.style.top = '50px';

var a_backtohome=document.createElement("a");
a_backtohome.href="https://knights207210.github.io/Firefox-extension-for-medlineplus-tutorial/";
a_backtohome.innerText="back to menu";
//a_backtohome.innerText.style.border = '5px solid red';
document.body.appendChild(a_backtohome);
a_backtohome.style.border = '5px solid red';
a_backtohome.style.fontSize = '30px';
a_backtohome.style.position = "absolute";
a_backtohome.style.left = '500px'
a_backtohome.style.top = '100px';
};