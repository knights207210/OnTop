//var audio = new Audio('http://home.ustc.edu.cn/~wyc0807/test1.mp3');
//audio.autoplay = true;
//audio.load();
//audio.play()

//var btn =document.getElementById("111889") ; btn.style.border="1px solid #FF9933" ; 
//h3.nickelled__slide__title nickelled__component__title

//var title = window.guideJSON.getElementById("111889").title;
//alert(title);
//if(title == "Medline Plus Tutorial"){
	//var audio = new Audio('http://home.ustc.edu.cn/~wyc0807/test1.mp3');
    //audio.autoplay = true;
    //audio.load();
//}
var open = new Audio('http://home.ustc.edu.cn/~wyc0807/welcome1.mp3');
window.onload = function(){

  //open.autoplay = true;
  open.load();
  open.play();
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
///a_termreview.style.color = "black";
a_termreview.style.backgroundColor = "yellow";

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
//a_goal1.style.color = "black";
//a_goal1.style.backgroundColor = "yellow";

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
//a_goal2.style.color = "black";
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
//a_goal3.style.color = "black";
//a_goal3.style.backgroundColor = "white";

var a_goal4=document.createElement("a");
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
//a_goal4.style.backgroundColor = "white";
};




document.addEventListener("click", function(){
	//alert(document.getElementsByClassName("nickelled__step__title nickelled__component__title")[0].innerHTML);
  if(document.getElementsByClassName("nickelled__slide__title nickelled__component__title")[0].innerHTML == "Medline Plus Tutorial"){
  audio1.pause();
  open.load();
  open.play();
  //var audio = new Audio('http://home.ustc.edu.cn/~wyc0807/welcome.mp3');
  //audio.autoplay = true;
  //audio.load();
}
}, false);



