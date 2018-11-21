var open = new Audio('http://home.ustc.edu.cn/~wyc0807/ifyouwanttosearchdiabetes.mp3');
var audio1 = new Audio('http://home.ustc.edu.cn/~wyc0807/first.mp3');
var audio2 = new Audio('http://home.ustc.edu.cn/~wyc0807/second.mp3');






window.onload = function(){
//var open = new Audio('http://home.ustc.edu.cn/~wyc0807/ifyouwanttosearchdiabetes.mp3');
  //open.autoplay = true;
  open.load();
  open.play();
};




document.addEventListener("click", function(){
	//alert(document.getElementsByClassName("nickelled__step__title nickelled__component__title")[0].innerHTML);
  if(document.getElementsByClassName("nickelled__slide__title nickelled__component__title")[0].innerHTML == "If you want to search Diabetes"){
  //var audio = new Audio('http://home.ustc.edu.cn/~wyc0807/ifyouwanttosearchdiabetes.mp3');
  //audio.autoplay = true;
  //audio.load();
  audio1.pause();
  open.load();
  open.play();}
  /*else if(document.getElementsByClassName("nickelled__slide__title nickelled__component__title")[0].innerHTML == "Now you are on the Health Topics Page"){
  var audio = new Audio('http://home.ustc.edu.cn/~wyc0807/healthtopicpage.mp3');
  audio.autoplay = true;
  audio.load();}*/
  
}, false);




document.addEventListener("click", function(){
	//alert(document.getElementsByClassName("nickelled__step__title nickelled__component__title")[0].innerHTML);
  if(document.getElementsByClassName("nickelled__step__title nickelled__component__title")[0].innerHTML == "First, go to Health Topics page"){
  //var audio = new Audio('http://home.ustc.edu.cn/~wyc0807/first.mp3');
  //audio.autoplay = true;
  //audio.load();
  open.pause();
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



