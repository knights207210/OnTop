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
//var open = new Audio('http://home.ustc.edu.cn/~wyc0807/welcome.mp3');
var audio1 = new Audio('http://home.ustc.edu.cn/~wyc0807/term_review1.mp3');
var audio2 = new Audio('http://home.ustc.edu.cn/~wyc0807/text box.mp3');
var audio3 = new Audio('http://home.ustc.edu.cn/~wyc0807/search box.mp3');
var audio4 = new Audio('http://home.ustc.edu.cn/~wyc0807/sign up box.mp3');
var audio5 = new Audio('http://home.ustc.edu.cn/~wyc0807/text is a link.mp3');
var audio6 = new Audio('http://home.ustc.edu.cn/~wyc0807/image_can_be_a_link.mp3');
var audio7 = new Audio('http://home.ustc.edu.cn/~wyc0807/link.mp3');
var audio8 = new Audio('http://home.ustc.edu.cn/~wyc0807/text is a link.mp3');
var audio9 = new Audio('http://home.ustc.edu.cn/~wyc0807/image_can_be_a_link.mp3');
window.onload = function(){

  //open.autoplay = true;
  audio1.load();
  audio1.play();
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
  if(document.getElementsByClassName("nickelled__slide__title nickelled__component__title")[0].innerHTML == "Terms Review"){
  open.pause();
  audio2.pause();
  audio1.load();
  audio1.play();
  //var audio = new Audio('http://home.ustc.edu.cn/~wyc0807/term review.mp3');
  //audio.autoplay = true;
  //audio.load();
}
  else if(document.getElementsByClassName("nickelled__slide__title nickelled__component__title")[0].innerHTML == "Text box"){
  audio1.pause();
  audio3.pause();
  audio2.load();
  audio2.play();
  //var audio = new Audio('http://home.ustc.edu.cn/~wyc0807/text box.mp3');
  //audio.autoplay = true;
  //audio.load();
}
  
}, false);




document.addEventListener("click", function(){
	//alert(document.getElementsByClassName("nickelled__step__title nickelled__component__title")[0].innerHTML);
  if(document.getElementsByClassName("nickelled__step__title nickelled__component__title")[0].innerHTML == "Search box"){
  //var audio = new Audio('http://home.ustc.edu.cn/~wyc0807/search box.mp3');
  //audio.autoplay = true;
  audio2.pause();
  audio4.pause();
  audio3.load();
  audio3.play();
  document.getElementById("mplus-nav-bar").style.border = "5px solid white";
  document.getElementsByClassName("form-box text-combo")[0].style.border = "5px solid red";
  document.getElementsByClassName("form-box text-combo")[1].style.border = "5px solid white";
  document.getElementsByClassName("address")[0].style.border = "5px solid white";
  document.getElementsByClassName("slide selected")[0].style.border = "5px solid white";}
  else if(document.getElementsByClassName("nickelled__step__title nickelled__component__title")[0].innerHTML == "Sign up box"){
  //var audio = new Audio('http://home.ustc.edu.cn/~wyc0807/sign up box.mp3');
  //audio.autoplay = true;
  //audio.load();
  audio3.pause();
  audio7.pause();
  audio4.load();
  audio4.play();
  document.getElementById("mplus-nav-bar").style.border = "5px solid white";
  document.getElementsByClassName("form-box text-combo")[0].style.border = "5px solid white";
  document.getElementsByClassName("form-box text-combo")[1].style.border = "5px solid red";
  document.getElementsByClassName("address")[0].style.border = "5px solid white";
  document.getElementsByClassName("slide selected")[0].style.border = "5px solid white";}
  else if(document.getElementsByClassName("nickelled__step__title nickelled__component__title")[0].innerHTML == "Text can be a link"){
  //var audio = new Audio('http://home.ustc.edu.cn/~wyc0807/text is a link.mp3');
  //audio.autoplay = true;
  //audio.load();
  audio6.pause();
  audio7.pause();
  audio5.load();
  audio5.play();
  document.getElementById("mplus-nav-bar").style.border = "5px solid white";
  document.getElementsByClassName("form-box text-combo")[0].style.border = "5px solid white";
  document.getElementsByClassName("form-box text-combo")[1].style.border = "5px solid white";
  document.getElementsByClassName("address")[0].style.border = "5px solid red";
  document.getElementsByClassName("slide selected")[0].style.border = "5px solid white";}
  else if(document.getElementsByClassName("nickelled__step__title nickelled__component__title")[0].innerHTML == "An image can be a link"){
  //var audio = new Audio('http://home.ustc.edu.cn/~wyc0807/image can be a link.mp3');
  //audio.autoplay = true;
  //audio.load();
  audio5.pause();
  //audio7.pause();
  audio6.load();
  audio6.play();
  document.getElementById("mplus-nav-bar").style.border = "5px solid white";
  document.getElementsByClassName("form-box text-combo")[0].style.border = "5px solid white";
  document.getElementsByClassName("form-box text-combo")[1].style.border = "5px solid white";
  document.getElementsByClassName("address")[0].style.border = "5px solid white";
  document.getElementsByClassName("slide selected")[0].style.border = "5px solid red";}
  
}, false);



document.addEventListener("click", function(){
  if(document.getElementsByClassName("nickelled__slide__title nickelled__component__title")[0].innerHTML == "Link"){
  //var audio = new Audio('http://home.ustc.edu.cn/~wyc0807/link.mp3');
  //audio.autoplay = true;
  //audio.load();
  audio4.pause();
  audio5.pause();
  audio7.load();
  audio7.play();}
}, false);


/*document.addEventListener("click", function(){
  if(document.getElementsByClassName("nickelled__step__title nickelled__component__title")[0].innerHTML == "Text can be a link"){
  //var audio = new Audio('http://home.ustc.edu.cn/~wyc0807/text is a link.mp3');
  //audio.autoplay = true;
  //audio.load();
  audio7.pause();
  audio9.pause();
  audio8.load();
  audio8.play();}
  else if(document.getElementsByClassName("nickelled__step__title nickelled__component__title")[0].innerHTML == "An image can be a link"){
  //var audio = new Audio('http://home.ustc.edu.cn/~wyc0807/image can be a link.mp3');
  //audio.autoplay = true;
  //audio.load();
  audio8.pause();
  //audio9.pause();
  audio9.load();
  audio9.play();}
  
}, false);*/


/*document.addEventListener("click", function(){
  if(document.getElementsByClassName("nickelled__slide__title nickelled__component__title")[0].innerHTML == "Goal 1: Main Features of MedlinePlus Homepage"){
  var audio = new Audio('http://home.ustc.edu.cn/~wyc0807/complete.mp3');
  audio.autoplay = true;
  audio.load();}
}, false);


document.addEventListener("click", function(){
  if(document.getElementsByClassName("nickelled__step__title nickelled__component__title")[0].innerHTML == "Three broad categories: Health Topics, Drugs and Supplements, Videos and Tools"){
  var audio = new Audio('http://home.ustc.edu.cn/~wyc0807/cate.mp3');
  audio.autoplay = true;
  audio.load();
  document.getElementById("mplus-nav-bar").style.border = "5px solid red";
  document.getElementsByClassName("form-box text-combo")[0].style.border = "5px solid white";
  document.getElementsByClassName("form-box text-combo")[1].style.border = "5px solid white";
  document.getElementsByClassName("address")[0].style.border = "5px solid white";
  document.getElementsByClassName("slide selected")[0].style.border = "5px solid white";}
  else if(document.getElementsByClassName("nickelled__step__title nickelled__component__title")[0].innerHTML == "This is Search box"){
  var audio = new Audio('http://home.ustc.edu.cn/~wyc0807/secmainfeature.mp3');
  audio.autoplay = true;
  audio.load();
  document.getElementById("mplus-nav-bar").style.border = "5px solid white";
  document.getElementsByClassName("form-box text-combo")[0].style.border = "5px solid red";
  document.getElementsByClassName("form-box text-combo")[1].style.border = "5px solid white";
  document.getElementsByClassName("address")[0].style.border = "5px solid white";
  document.getElementsByClassName("slide selected")[0].style.border = "5px solid white";}
  
}, false);

document.addEventListener("click", function(){
  if(document.getElementsByClassName("nickelled__slide__title nickelled__component__title")[0].innerHTML == "Practice: Click on the link of Health Topics"){
  var audio = new Audio('http://home.ustc.edu.cn/~wyc0807/practice.mp3');
  audio.autoplay = true;
  audio.load();}
}, false);*/

