var open = new Audio('http://home.ustc.edu.cn/~wyc0807/goal2.mp3');
var audio_if = new Audio('http://home.ustc.edu.cn/~wyc0807/ifyouwanttosearchdiabetes.mp3');
var audio1 = new Audio('http://home.ustc.edu.cn/~wyc0807/first.mp3');
var audio2 = new Audio('http://home.ustc.edu.cn/~wyc0807/second.mp3');






window.onload = function(){
//var open = new Audio('http://home.ustc.edu.cn/~wyc0807/ifyouwanttosearchdiabetes.mp3');
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
	//alert(document.getElementsByClassName("nickelled__step__title nickelled__component__title")[0].innerHTML);
  if(document.getElementsByClassName("nickelled__slide__title nickelled__component__title")[0].innerHTML == "Now we will move to GOAL 2: learning to find health topics"){
  //var audio = new Audio('http://home.ustc.edu.cn/~wyc0807/ifyouwanttosearchdiabetes.mp3');
  //audio.autoplay = true;
  //audio.load();
  audio_if.pause();
  open.load();
  open.play();}
  /*else if(document.getElementsByClassName("nickelled__slide__title nickelled__component__title")[0].innerHTML == "Now you are on the Health Topics Page"){
  var audio = new Audio('http://home.ustc.edu.cn/~wyc0807/healthtopicpage.mp3');
  audio.autoplay = true;
  audio.load();}*/
  else if(document.getElementsByClassName("nickelled__slide__title nickelled__component__title")[0].innerHTML == "If you want to search Diabetes"){
  //var audio = new Audio('http://home.ustc.edu.cn/~wyc0807/ifyouwanttosearchdiabetes.mp3');
  //audio.autoplay = true;
  //audio.load();
  open.pause();
  audio1.pause();
  audio_if.load();
  audio_if.play();}
  
}, false);




document.addEventListener("click", function(){
	//alert(document.getElementsByClassName("nickelled__step__title nickelled__component__title")[0].innerHTML);
  
  /*else if(document.getElementsByClassName("nickelled__slide__title nickelled__component__title")[0].innerHTML == "Now you are on the Health Topics Page"){
  var audio = new Audio('http://home.ustc.edu.cn/~wyc0807/healthtopicpage.mp3');
  audio.autoplay = true;
  audio.load();}*/
  
  if(document.getElementsByClassName("nickelled__step__title nickelled__component__title")[0].innerHTML == "First, go to Health Topics page"){
  //var audio = new Audio('http://home.ustc.edu.cn/~wyc0807/first.mp3');
  //audio.autoplay = true;
  //audio.load();
  audio_if.pause();
  audio2.pause();
  audio1.load();
  audio1.play();
  document.getElementsByTagName("h1")[0].style.border = "5px solid red";
  document.getElementsByClassName("section-header")[0].style.border = "5px solid white";
  document.getElementsByClassName("section-header")[1].style.border = "5px solid white";
  document.getElementsByClassName("section-header")[2].style.border = "5px solid white";
  document.getElementsByClassName("section-header")[3].style.border = "5px solid white";
  document.getElementsByClassName("section-header")[4].style.border = "5px solid white";
  document.getElementsByClassName("section-header")[5].style.border = "5px solid white";
  document.getElementsByClassName("section-header")[5].style.border = "5px solid white";
  document.getElementById("anch_26").style.border = "5px solid white";}
  else if(document.getElementsByClassName("nickelled__step__title nickelled__component__title")[0].innerHTML == "Second, click on Diabetes initial letter D to find all the diseases starting with D"){
  //var audio = new Audio('http://home.ustc.edu.cn/~wyc0807/second.mp3');
  //audio.autoplay = true;
  //audio.load();
  audio1.pause();
  //audio3.pause();
  audio2.load();
  audio2.play();
  document.getElementsByTagName("h1")[0].style.border = "5px solid white";
  document.getElementsByClassName("section-header")[0].style.border = "5px solid red";
  document.getElementsByClassName("section-header")[1].style.border = "5px solid white";
  document.getElementsByClassName("section-header")[2].style.border = "5px solid white";
  document.getElementsByClassName("section-header")[3].style.border = "5px solid white";
  document.getElementsByClassName("section-header")[4].style.border = "5px solid white";
  document.getElementsByClassName("section-header")[5].style.border = "5px solid white";
  document.getElementsByClassName("section-header")[5].style.border = "5px solid white";
  document.getElementById("anch_26").style.border = "5px solid red";}
  /*else if(document.getElementsByClassName("nickelled__step__title nickelled__component__title")[0].innerHTML == "We can also search for a disease according to categories"){
  var audio = new Audio('http://home.ustc.edu.cn/~wyc0807/categories.mp3');
  audio.autoplay = true;
  audio.load();
  document.getElementsByTagName("h1")[0].style.border = "5px solid white";
  document.getElementsByClassName("section-header")[0].style.border = "5px solid white";
  document.getElementsByClassName("section-header")[1].style.border = "5px solid red";
  document.getElementsByClassName("section-header")[2].style.border = "5px solid red";
  document.getElementsByClassName("section-header")[3].style.border = "5px solid red";
  document.getElementsByClassName("section-header")[4].style.border = "5px solid red";
  document.getElementsByClassName("section-header")[5].style.border = "5px solid red";
  document.getElementsByClassName("section-header")[5].style.border = "5px solid red";
  document.getElementById("anch_26").style.border = "5px solid white";}*/
}, false);



