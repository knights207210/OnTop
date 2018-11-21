var open = new Audio('http://home.ustc.edu.cn/~wyc0807/afterclickondiabetes.mp3');
var audio1 = new Audio('http://home.ustc.edu.cn/~wyc0807/diabetestitle.mp3');
var audio2 = new Audio('http://home.ustc.edu.cn/~wyc0807/usefullinks.mp3');
window.onload = function(){

//open.autoplay = true;
open.load();
open.play();
};

document.addEventListener("click", function(){
	//alert(document.getElementsByClassName("nickelled__step__title nickelled__component__title")[0].innerHTML);
  if(document.getElementsByClassName("nickelled__slide__title nickelled__component__title")[0].innerHTML == "After you click on Diabetes link, you will come to Diabetes page"){
  //var audio = new Audio('http://home.ustc.edu.cn/~wyc0807/afterclickondiabetes.mp3');
  //audio.autoplay = true;
  //audio.load();
  audio1.pause();
  open.load();
  open.play();
}  
}, false);


document.addEventListener("click", function(){
  //alert(document.getElementsByClassName("nickelled__step__title nickelled__component__title")[0].innerHTML);
  if(document.getElementsByClassName("nickelled__step__title nickelled__component__title")[0].innerHTML == "This is the health topic page of diabetes"){
  
  //audio.autoplay = true;
  //audio.load();
  open.pause();
  audio2.pause();
  audio1.load();
  audio1.play();
  document.getElementsByTagName("h1")[0].style.border = "5px solid red";
  document.getElementById("table-of-contents").style.border = "5px solid white";
  }
  /*else if(document.getElementsByClassName("nickelled__step__title nickelled__component__title")[0].innerHTML == "This is the health topic's title"){
  var audio = new Audio('http://home.ustc.edu.cn/~wyc0807/healthtopicstitle.mp3');
  audio.autoplay = true;
  audio.load();
  document.getElementsByTagName("h1")[0].style.border = "5px solid white";
  document.getElementsByClassName("section-header")[0].style.border = "5px solid red";
  document.getElementsByClassName("section-header")[1].style.border = "5px solid white";
  document.getElementsByClassName("section-header")[2].style.border = "5px solid white";
  document.getElementsByClassName("section-header")[3].style.border = "5px solid white";
  document.getElementsByClassName("section-header")[4].style.border = "5px solid white";
  document.getElementsByClassName("section-header")[5].style.border = "5px solid white";
  document.getElementsByClassName("section-header")[5].style.border = "5px solid white";
  document.getElementById("anch_26").style.border = "5px solid white";}*/
  else if(document.getElementsByClassName("nickelled__step__title nickelled__component__title")[0].innerHTML == "This section includes some useful resources link of Diabetes"){
  
  //audio.autoplay = true;
  //audio.load();
  audio1.pause();
  //audio3.pause();
  audio2.load();
  audio2.play();
  document.getElementsByTagName("h1")[0].style.border = "5px solid white";
  document.getElementById("table-of-contents").style.border = "5px solid red";}
}, false);


