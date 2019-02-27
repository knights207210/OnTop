//function changeBorder() { 
	//document.getElementByName("Health Topics").style.border="thick solid #0000FF"; 
//}
window.onload = function(){
/*
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
*/

//----------------------------------------------------------------------------------------------------------------
// create a menu
var a_termreview=document.createElement("a");
a_termreview.href="https://ontop.nickelled.com/mmedlineplus-guide?ngroup=link";
a_termreview.innerText=" Basic Internet Terms Review  ";
//a_backtohome.innerText.style.border = '5px solid red';
document.body.appendChild(a_termreview);
a_termreview.style.lineHeight="30px";
a_termreview.style.border = '2px solid grey';
a_termreview.style.fontSize = '16px';
a_termreview.style.fontWeight = "bold";
a_termreview.style.position = "absolute";
a_termreview.style.top = '20px';
a_termreview.style.left = '1px';
a_termreview.style.color = "black";
//a_termreview.style.backgroundColor = "white";

var a_goal1=document.createElement("a");
a_goal1.href="https://ontop.nickelled.com/homepageinfo?ngroup=link";
a_goal1.innerText="\b GOAL 1: Main Features \b";
//a_backtohome.innerText.style.border = '5px solid red';
document.body.appendChild(a_goal1);
a_goal1.style.lineHeight="30px";
a_goal1.style.border = '2px solid grey';
a_goal1.style.fontSize = '19px';
a_goal1.style.fontWeight = "bold";
a_goal1.style.position = "absolute";
a_goal1.style.top = '52px';
a_goal1.style.left = '1px';
a_goal1.style.color = "black";
//a_goal1.style.backgroundColor = "white";

var a_goal2=document.createElement("a");
a_goal2.href="https://ontop.nickelled.com/healthtopics-1?ngroup=link";
a_goal2.innerText="\b GOAL 2:  Health Topics \b";
//a_backtohome.innerText.style.border = '5px solid red';
document.body.appendChild(a_goal2);
a_goal2.style.lineHeight="30px";
a_goal2.style.border = '2px solid grey';
a_goal2.style.fontSize = '19px';
a_goal2.style.fontWeight = "bold";
a_goal2.style.position = "absolute";
a_goal2.style.top = '84px';
a_goal2.style.left = '1px';
a_goal2.style.color = "black";
//a_goal2.style.backgroundColor = "white";

var a_goal3=document.createElement("a");
a_goal3.href="https://ontop.nickelled.com/healthtopicsinfo?ngroup=link";
a_goal3.innerText="\b Main Features on Health Topics Page ";
//a_backtohome.innerText.style.border = '5px solid red';
document.body.appendChild(a_goal3);
a_goal3.style.lineHeight="30px";
a_goal3.style.border = '2px solid grey';
a_goal3.style.fontSize = '12px';
a_goal3.style.fontWeight = "bold";
a_goal3.style.position = "absolute";
a_goal3.style.top = '116px';
a_goal3.style.left = '1px';
a_goal3.style.color = "black";
//a_goal3.style.backgroundColor = "white";

/*var a_goal4=document.createElement("a");
a_goal4.href="https://ontop.nickelled.com/mmedlineplus-guide?ngroup=link";
a_goal4.innerText="\b GOAL 3: Search Box \b ";
//a_backtohome.innerText.style.border = '5px solid red';
document.body.appendChild(a_goal4);
a_goal4.style.lineHeight="30px";
a_goal4.style.border = '2px solid grey';
a_goal4.style.fontSize = '22px';
a_goal4.style.fontWeight = "bold";
a_goal4.style.position = "absolute";
a_goal4.style.top = '148px';
a_goal4.style.left = '1px';
//a_goal4.style.color = "black";
//a_goal4.style.backgroundColor = "white";*/


var p_homepage=document.createElement("a");
p_homepage.innerText="Practice to click Health Topics ";
//a_backtohome.innerText.style.border = '5px solid red';
document.body.appendChild(p_homepage);
p_homepage.style.lineHeight="30px";
p_homepage.style.border = '2px solid grey';
p_homepage.style.fontSize = '15px';
p_homepage.style.fontWeight = "bold";
p_homepage.style.position = "absolute";
p_homepage.style.top = '148px';
p_homepage.style.left = '1px';
p_homepage.style.color = "black";
//a_goal3.style.backgroundColor = "white";
p_homepage.addEventListener("click", function(){
  document.getElementById("anch_13").style.border = "5px solid red";
  document.getElementById("anch_18").style.border = "5px solid red";
  document.getElementsByClassName("icon icon-home-ht")[0].style.border = "5px solid red";
  document.getElementsByClassName("form-box text-combo")[0].style.border = "5px solid white";

  var instruction_healthtopic=document.createElement("a");
  instruction_healthtopic.setAttribute("id","instruction_healthtopic");
instruction_healthtopic.innerText="Click on the icon or one of the 'Health Topics' to go to health topics page";
//a_backtohome.innerText.style.border = '5px solid red';
document.body.appendChild(instruction_healthtopic);
instruction_healthtopic.style.border = '3px solid red';
instruction_healthtopic.style.fontSize = '15px';
instruction_healthtopic.style.position = "absolute";
instruction_healthtopic.style.top = '120px';
instruction_healthtopic.style.left = '250px';

var list1 = document.getElementById("instruction_search");
list1.removeChild(list1.childNodes[0]);
list1.removeChild(list1.childNodes[1]);





});


var p_sb=document.createElement("a");
p_sb.innerText="Practice to use search box \b";
//a_backtohome.innerText.style.border = '5px solid red';
document.body.appendChild(p_sb);
p_sb.style.lineHeight="30px";
p_sb.style.border = '2px solid grey';
p_sb.style.fontSize = '17px';
p_sb.style.fontWeight = "bold";
p_sb.style.position = "absolute";
p_sb.style.top = '180px';
p_sb.style.left = '1px';
p_sb.style.color = "black";
//a_goal3.style.backgroundColor = "white";
p_sb.addEventListener("click", function(){
  document.getElementById("anch_13").style.border = "5px solid white";
  document.getElementById("anch_18").style.border = "5px solid white";
  document.getElementsByClassName("icon icon-home-ht")[0].style.border = "5px solid green";
  document.getElementsByClassName("form-box text-combo")[0].style.border = "5px solid red";
  var instruction_search=document.createElement("a");
  instruction_search.setAttribute("id","instruction_search");
instruction_search.innerText="type in 'diabetes', click 'GO' button";
//a_backtohome.innerText.style.border = '5px solid red';
document.body.appendChild(instruction_search);
instruction_search.style.border = '3px solid red';
instruction_search.style.fontSize = '20px';
instruction_search.style.position = "absolute";
instruction_search.style.top = '120px';
instruction_search.style.right = '130px';


var list2 = document.getElementById("instruction_healthtopic");
list2.removeChild(list2.childNodes[0]);
list2.removeChild(list2.childNodes[1]);


})
};