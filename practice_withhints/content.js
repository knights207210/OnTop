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
var open = new Audio('http://home.ustc.edu.cn/~wyc0807/welcome.mp3');
var audio1 = new Audio('http://home.ustc.edu.cn/~wyc0807/term review.mp3');
var audio2 = new Audio('http://home.ustc.edu.cn/~wyc0807/text box.mp3');
var audio3 = new Audio('http://home.ustc.edu.cn/~wyc0807/search box.mp3');
var audio4 = new Audio('http://home.ustc.edu.cn/~wyc0807/sign up box.mp3');
var audio5 = new Audio('http://home.ustc.edu.cn/~wyc0807/text is a link.mp3');
var audio6 = new Audio('http://home.ustc.edu.cn/~wyc0807/image can be a link.mp3');
var audio7 = new Audio('http://home.ustc.edu.cn/~wyc0807/link.mp3');
var audio8 = new Audio('http://home.ustc.edu.cn/~wyc0807/text is a link.mp3');
var audio9 = new Audio('http://home.ustc.edu.cn/~wyc0807/image can be a link.mp3');
window.onload = function(){

  //open.autoplay = true;
  open.load();
  open.play();
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
  else if(document.getElementsByClassName("nickelled__slide__title nickelled__component__title")[0].innerHTML == "Terms Review"){
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

