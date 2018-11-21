//function changeBorder() { 
	//document.getElementByName("Health Topics").style.border="thick solid #0000FF"; 
//}
window.onload = function(){
document.getElementById("anch_13").style.border = "3px solid red";
document.getElementById("anch_14").style.border = "3px solid red";
document.getElementsByClassName("form-box text-combo")[0].style.border = "5px solid red";

var a_backtohome=document.createElement("a");
a_backtohome.href="https://knights207210.github.io/Firefox-extension-for-medlineplus-tutorial/";
a_backtohome.innerText="back to menu";
//a_backtohome.innerText.style.border = '5px solid red';
document.body.appendChild(a_backtohome);
a_backtohome.style.border = '5px solid red';
a_backtohome.style.fontSize = '30px';
a_backtohome.style.position = "absolute";
a_backtohome.style.top = '20px';

var instruction_healthtopic=document.createElement("a");
instruction_healthtopic.innerText="find diabetes using Health Topics, find Aspirin and Gingko using Drugs & Supplements";
//a_backtohome.innerText.style.border = '5px solid red';
document.body.appendChild(instruction_healthtopic);
instruction_healthtopic.style.border = '3px solid red';
instruction_healthtopic.style.fontSize = '15px';
instruction_healthtopic.style.position = "absolute";
instruction_healthtopic.style.top = '120px';
instruction_healthtopic.style.left = '5px';

var instruction_search=document.createElement("a");
instruction_search.innerText="type in 'diabetes', click 'GO' button";
//a_backtohome.innerText.style.border = '5px solid red';
document.body.appendChild(instruction_search);
instruction_search.style.border = '3px solid red';
instruction_search.style.fontSize = '20px';
instruction_search.style.position = "absolute";
instruction_search.style.top = '120px';
instruction_search.style.right = '130px';

/*var b=document.createElement("a");
b.innerText="";
//a_backtohome.innerText.style.border = '5px solid red';
document.body.appendChild(b);
b.style.border = '3px solid red';
b.style.fontSize = '20px';
b.style.position = "absolute";
b.style.top = '170px';
b.style.left = '150px';*/
};