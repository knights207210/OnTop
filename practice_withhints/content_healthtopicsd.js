window.onload = function(){
/*var a_backtohome=document.createElement("a");
a_backtohome.href="https://knights207210.github.io/Firefox-extension-for-medlineplus-tutorial/";
a_backtohome.innerText="back to menu";
//a_backtohome.innerText.style.border = '5px solid red';
document.body.appendChild(a_backtohome);
a_backtohome.style.border = '5px solid red';
a_backtohome.style.fontSize = '30px';
a_backtohome.style.position = "absolute";
a_backtohome.style.top = '20px';*/
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

var scrolldown=document.createElement("a");
scrolldown.innerText="Second, scroll down to find 'diabetes'";
//a_backtohome.innerText.style.border = '5px solid red';
document.body.appendChild(scrolldown);
scrolldown.style.border = '3px solid red';
scrolldown.style.fontSize = '20px';
scrolldown.style.position = "absolute";
scrolldown.style.top = '200px';

document.getElementById("anch_81").style.border = "5px solid red";

var instruction_healthtopic=document.createElement("a");
instruction_healthtopic.innerText="Third, click on 'diabetes'";
//a_backtohome.innerText.style.border = '5px solid red';
document.body.appendChild(instruction_healthtopic);
instruction_healthtopic.style.border = '3px solid red';
instruction_healthtopic.style.fontSize = '20px';
instruction_healthtopic.style.position = "absolute";
instruction_healthtopic.style.top = '1350px';
instruction_healthtopic.style.left = '20px';
};