window.onload = function(){
document.getElementById("anch_29").style.border = "5px solid red";
document.getElementById("anch_116").style.border = "5px solid red";
//document.getElementById("anch_50").style.border = "5px solid red";
//document.getElementById("anch_14").style.border = "5px solid red";
//document.getElementsByClassName("form-box text-combo")[0].style.border = "5px solid red";

var a_backtohome=document.createElement("a");
a_backtohome.href="https://knights207210.github.io/Firefox-extension-for-medlineplus-tutorial/";
a_backtohome.innerText="back to menu";
//a_backtohome.innerText.style.border = '5px solid red';
document.body.appendChild(a_backtohome);
a_backtohome.style.border = '5px solid red';
a_backtohome.style.fontSize = '30px';
a_backtohome.style.position = "absolute";
a_backtohome.style.top = '20px';

var a_backtohome2=document.createElement("a");
a_backtohome2.href="https://knights207210.github.io/Firefox-extension-for-medlineplus-tutorial/";
a_backtohome2.innerText="back to menu";
//a_backtohome.innerText.style.border = '5px solid red';
document.body.appendChild(a_backtohome2);
a_backtohome2.style.border = '5px solid red';
a_backtohome2.style.fontSize = '30px';
a_backtohome2.style.position = "absolute";
a_backtohome2.style.top = '2800px';

var instruction_healthtopic=document.createElement("a");
instruction_healthtopic.innerText="Find supplements start with 'G', like Ginkgo";
//a_backtohome.innerText.style.border = '5px solid red';
document.body.appendChild(instruction_healthtopic);
instruction_healthtopic.style.border = '3px solid red';
instruction_healthtopic.style.fontSize = '18px';
instruction_healthtopic.style.position = "absolute";
instruction_healthtopic.style.top = '320px';
instruction_healthtopic.style.left = '150px';

var instruction_search=document.createElement("a");
instruction_search.innerText="click on 'Ginkgo'";
//a_backtohome.innerText.style.border = '5px solid red';
document.body.appendChild(instruction_search);
instruction_search.style.border = '3px solid red';
instruction_search.style.fontSize = '20px';
instruction_search.style.position = "absolute";
instruction_search.style.top = '2880px';
instruction_search.style.left = '40px';
}