window.onload = function(){
var open = new Audio('http://home.ustc.edu.cn/~wyc0807/congras_letterD.mp3');
  open.autoplay = true;
  open.load();
};




document.addEventListener("click", function(){
	//alert(document.getElementsByClassName("nickelled__step__title nickelled__component__title")[0].innerHTML);
  if(document.getElementsByClassName("nickelled__slide__title nickelled__component__title")[0].innerHTML == "Congratulations! You click on letter D successfully"){
  var audio = new Audio('http://home.ustc.edu.cn/~wyc0807/congras_letterD.mp3');
  audio.autoplay = true;
  audio.load();}
  else if(document.getElementsByClassName("nickelled__slide__title nickelled__component__title")[0].innerHTML == "This brings up with a list of health topics start with letter D"){
  var audio = new Audio('http://home.ustc.edu.cn/~wyc0807/afterclickletterd.mp3');
  audio.autoplay = true;
  audio.load();}
  else if(document.getElementsByClassName("nickelled__slide__title nickelled__component__title")[0].innerHTML == "You are now on the page where health topics start with letter D"){
  var audio = new Audio('http://home.ustc.edu.cn/~wyc0807/youarenow.mp3');
  audio.autoplay = true;
  audio.load();}
  
}, false);




document.addEventListener("click", function(){
	//alert(document.getElementsByClassName("nickelled__step__title nickelled__component__title")[0].innerHTML);
  if(document.getElementsByClassName("nickelled__step__title nickelled__component__title")[0].innerHTML == "Second, scroll down to the bottom until you find diabetes and click on the link"){
  var audio = new Audio('http://home.ustc.edu.cn/~wyc0807/secondstep.mp3');
  audio.autoplay = true;
  audio.load();
  document.getElementById("anch_80").style.border = "5px solid red";}  
}, false);



document.addEventListener("click", function(){
  if(document.getElementsByClassName("nickelled__slide__title nickelled__component__title")[0].innerHTML == "Practice: scroll down and click on diabetes"){
  var audio = new Audio('http://home.ustc.edu.cn/~wyc0807/practice_letterd.mp3');
  audio.autoplay = true;
  audio.load();}
}, false);

