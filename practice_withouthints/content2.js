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


