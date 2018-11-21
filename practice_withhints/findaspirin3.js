var open = new Audio('http://home.ustc.edu.cn/~wyc0807/yanotpola.mp3');
var audio1 = new Audio('http://home.ustc.edu.cn/~wyc0807/titloa.mp3');
var audio2 = new Audio('http://home.ustc.edu.cn/~wyc0807/citywftpyw.mp3');
window.onload = function(){
//var open = new Audio('http://home.ustc.edu.cn/~wyc0807/main feature.mp3');
  //open.autoplay = true;
  open.load();
  open.play();
  document.getElementsByTagName("h1")[0].style.border = "5px solid red";
};




document.addEventListener("click", function(){
	//alert(document.getElementsByClassName("nickelled__step__title nickelled__component__title")[0].innerHTML);
  if(document.getElementsByClassName("nickelled__step__title nickelled__component__title")[0].innerHTML == 'After you click on letter "A", you are now on the page of drugs starting with letter "A"'){
  audio1.pause();
  open.load();
  open.play();
  document.getElementsByTagName("h1")[0].style.border = "5px solid red";
  document.getElementById("anch_566").style.border = "5px solid white";
  //var audio = new Audio('http://home.ustc.edu.cn/~wyc0807/main feature.mp3');
  //audio.autoplay = true;
  //audio.load();
}
  else if(document.getElementsByClassName("nickelled__step__title nickelled__component__title")[0].innerHTML == 'Third, scroll down to the bottom until you find Aspirin and click on the link'){
  //var audio = new Audio('http://home.ustc.edu.cn/~wyc0807/term review.mp3');
  //audio.autoplay = true;
  //audio.load();
  open.pause();
  audio2.pause();
  audio1.load();
  audio1.play();
  document.getElementsByTagName("h1")[0].style.border = "5px solid white";
  document.getElementById("anch_566").style.border = "5px solid red";}
  /*else if(document.getElementsByClassName("nickelled__slide__title nickelled__component__title")[0].innerHTML == "Text box"){
  var audio = new Audio('http://home.ustc.edu.cn/~wyc0807/text box.mp3');
  audio.autoplay = true;
  audio.load();*/
  else if(document.getElementsByClassName("nickelled__step__title nickelled__component__title")[0].innerHTML == "Click it, then you will find Aspirin page with the information you want"){
  audio1.pause();
  //audio3.pause();
  audio2.load();
  audio2.play();
  document.getElementsByTagName("h1")[0].style.border = "5px solid white";
  document.getElementById("anch_566").style.border = "5px solid red";
  }
  
}, false);


