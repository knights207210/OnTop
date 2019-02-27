var open = new Audio('http://home.ustc.edu.cn/~wyc0807/diabetess.mp3');
var audio1 = new Audio('http://home.ustc.edu.cn/~wyc0807/You are now on the page where health topics start with letter D.mp3');
var audio2 = new Audio('http://home.ustc.edu.cn/~wyc0807/third.mp3');
var audio3 = new Audio('http://home.ustc.edu.cn/~wyc0807/clickit.mp3');



window.onload = function(){
var open = new Audio('http://home.ustc.edu.cn/~wyc0807/diabetess.mp3');
  //open.autoplay = true;
  //open.load();
  //open.play();
  audio1.load();
  audio1.play();
  document.getElementsByTagName("h1")[0].style.border = "5px solid red";
  document.getElementById("anch_80").style.border = "5px solid red";
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
//a_termreview.style.backgroundColor = "yellow";

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
a_goal2.style.backgroundColor = "yellow";

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
};




document.addEventListener("click", function(){
  //if(document.getElementsByClassName("nickelled__step__title nickelled__component__title")[0].innerHTML == "You are now on the page where health topics start with letter D"){
  if(document.getElementsByClassName("nickelled__step__title nickelled__component__title")[0].innerHTML == "After you click with letter D, this brings up with a list of health topics start with letter D"){
  //var audio = new Audio('http://home.ustc.edu.cn/~wyc0807/You are now on the page where health topics start with letter D.mp3');
  //audio.autoplay = true;
  //audio.load();
  audio2.pause();
  //audio1.pause();
  //open.load();
  //open.play();
  audio1.load();
  audio1.play();
  //open.pause();
  //audio2.pause();
  //audio1.load();
  //audio1.play();
  document.getElementsByTagName("h1")[0].style.border = "5px solid red";
  document.getElementById("anch_80").style.border = "5px solid red";}
  else if (document.getElementsByClassName("nickelled__step__title nickelled__component__title")[0].innerHTML == "Third, scroll down to the bottom until you find diabetes and click on the link"){
  //var audio = new Audio('http://home.ustc.edu.cn/~wyc0807/third.mp3');
  //audio.autoplay = true;
  //audio.load();
  //open.pause();
  //open.pause();
  audio1.pause();
  audio3.pause();
  audio2.load();
  audio2.play();
  document.getElementsByTagName("h1")[0].style.border = "5px solid white";
  document.getElementById("anch_80").style.border = "5px solid red";}
  else if (document.getElementsByClassName("nickelled__step__title nickelled__component__title")[0].innerHTML == "Click it, then you will find Diabetes page with the information you want"){
  //var audio = new Audio('http://home.ustc.edu.cn/~wyc0807/clickit.mp3');
  //audio.autoplay = true;
  //audio.load();
  audio2.pause();
  //audio4.pause();
  audio3.load();
  audio3.play();

  document.getElementsByTagName("h1")[0].style.border = "5px solid white";
  document.getElementById("anch_80").style.border = "5px solid red";}
}, false);


/*document.addEventListener("click", function(){
  if(document.getElementsByClassName("nickelled__slide__title nickelled__component__title")[0].innerHTML == "Practice: click on letter D"){
  var audio = new Audio('http://home.ustc.edu.cn/~wyc0807/practice_healthtopics.mp3');
  audio.autoplay = true;
  audio.load();}
}, false);*/


